import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/api.config';

@Injectable({ providedIn: 'root' })
export class ChatService {
  async streamMessage(message: string): Promise<ReadableStreamDefaultReader<string>> {
    const response = await fetch(`${API_BASE_URL}/api/chat/stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`Stream request failed: ${response.status}`);
    }

    if (!response.body) {
      throw new Error('Response body is null');
    }

    return response.body.pipeThrough(new TextDecoderStream()).getReader();
  }
}
