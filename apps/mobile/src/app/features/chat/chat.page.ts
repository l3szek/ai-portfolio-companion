import {
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  IonContent,
  IonFooter,
  IonTextarea,
  IonSpinner,
  IonChip,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';
import { ChatService } from '../../core/services/chat.service';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    AppHeaderComponent,
    IonContent,
    IonFooter,
    IonTextarea,
    IonSpinner,
    IonChip,
    IonButton,
    IonIcon,
  ],
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  @ViewChild(IonContent) content!: IonContent;

  messages: Message[] = [];
  inputText = '';
  streaming = false;
  error: string | null = null;

  readonly suggestedPrompts = [
    'How is my portfolio performing?',
    'What are my biggest positions?',
    'Any risks I should know about?',
  ];

  constructor(
    private chatService: ChatService,
    private cdr: ChangeDetectorRef,
  ) {
    addIcons({ chevronBack });
  }

  selectPrompt(prompt: string): void {
    if (this.streaming) return;
    this.inputText = prompt;
    this.sendMessage();
  }

  async sendMessage(): Promise<void> {
    const text = this.inputText.trim();
    if (!text || this.streaming) return;

    this.inputText = '';
    this.error = null;
    this.streaming = true;

    this.messages.push({ role: 'user', text });
    this.messages.push({ role: 'assistant', text: '' });
    this.cdr.detectChanges();
    this.content.scrollToBottom(200);

    const assistantIndex = this.messages.length - 1;
    let reader: ReadableStreamDefaultReader<string> | null = null;

    try {
      reader = await this.chatService.streamMessage(text);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        for (const line of value.split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const payload = line.slice('data: '.length);
          if (payload === '[DONE]') {
            this.streaming = false;
            break;
          }
          this.messages[assistantIndex].text += payload;
        }

        this.cdr.detectChanges();
        this.content.scrollToBottom(100);

        if (!this.streaming) break;
      }
    } catch {
      this.error = 'Something went wrong. Please try again.';
      if (this.messages[assistantIndex]?.text === '') {
        this.messages.splice(assistantIndex, 1);
      }
    } finally {
      reader?.releaseLock();
      this.streaming = false;
      this.cdr.detectChanges();
      this.content.scrollToBottom(200);
    }
  }

  resetChat(): void {
    if (this.streaming) return;
    this.messages = [];
    this.error = null;
    this.inputText = '';
    this.cdr.detectChanges();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
