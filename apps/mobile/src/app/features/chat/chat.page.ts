import {
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonTextarea,
  IonSpinner,
  IonChip,
} from '@ionic/angular/standalone';
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
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonTextarea,
    IonSpinner,
    IonChip,
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
  ) {}

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

        if (value.includes('[DONE]')) {
          const textBeforeDone = value.replace('[DONE]', '').trimEnd();
          if (textBeforeDone) {
            this.messages[assistantIndex].text += textBeforeDone;
          }
          break;
        }

        this.messages[assistantIndex].text += value;
        this.cdr.detectChanges();
        this.content.scrollToBottom(100);
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

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
