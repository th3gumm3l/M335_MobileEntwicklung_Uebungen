import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable, map } from 'rxjs';
import { ChatMessage } from '../_types/chatmessage.types';
import { environment } from 'src/environments/environment';
import { Firestore, collection, collectionData, query, where, orderBy, Timestamp } from '@angular/fire/firestore';
import { addDoc, CollectionReference } from 'firebase/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) ionContent: IonContent;
  chatForm: FormGroup;
  showSpinnerIcon: boolean = false;
  showDates: boolean = false;
  chatMessages$: Observable<ChatMessage[]>;

  /*Autor Name und Profilbild*/
  currentAuthor: string = 'Tim';
  currentAuthorAvatarImageUrl: string = 'https://images.unsplash.com/photo-1663849172578-caaa4e6a6025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

  constructor(private afs: Firestore, private alertCtrl: AlertController) {
    this.chatMessages$ = collectionData(
      query(
        collection(this.afs, 'chats'),
        where('groupNumber', '==', environment.m335GroupNumber),
        orderBy('dateCreated', 'asc')
      ),
      {
        idField: 'id',
      }
    ).pipe(map((x) => x as ChatMessage[]));
  }

  ngOnInit() {
    /* TODO: Formularfelder definieren */
    this.chatForm = new FormGroup({
      message: new FormControl("", [Validators.required])
    });
  }

  isMyMessage(chatMessageAuthor: string): boolean {
    /* TODO: Vergleich ob chatMessage-Author der aktuelle Author */
    if (chatMessageAuthor == this.currentAuthor) {
      return true;
    }
    return false;
  }

  sendMessage() {
    if (this.chatForm.get('message')?.value != '') {
      /* TODO: Spinner einschalten */
      this.showSpinnerIcon = true;
      /* TODO: Mit der add(...) Methode 
                   eine Nachricht auf der ChatMessage-Referenz schreiben */
      addDoc(collection(this.afs, 'chats'), {groupNumber: environment.m335GroupNumber, author: this.currentAuthor, text: this.chatForm.value.message, dateCreated: Timestamp.now(), avatarImageUrl: this.currentAuthorAvatarImageUrl})
      /* TODO: Formular zurücksetzen */
      this.chatForm.reset();
      this.showSpinnerIcon = false;
    }
  }

  /* Zusatzaufgabe */
  swipeEvent(swipe: any) {
    // 2  = Right to left swipe
    // 4  = Left to right swipe
    if (swipe.direction == 2 || swipe.direction == 4) {
      this.showDates = !this.showDates; // Toggle
    }
  }

  async updateMessage(id: string, updatedText: string) {
    /* TODO: ChatMessage updaten */
  }

  async deleteMessage(id: string) {
    /* TODO: ChatMessage löschen */
  }

  /* Hilfestellungen */
  ngAfterViewChecked() {
    this.scrollContent('bottom'); // Scrollt ans Ende
  }

  scrollContent(scroll: any) {
    if (scroll === 'top') {
      this.ionContent?.scrollToTop(300);
    } else if (scroll === 'bottom') {
      this.ionContent?.scrollToBottom(300);
    }
  }

  stringToColor(inputString: string) {
    if (inputString) {
      let hash = 0;
      for (let i = 0; i < inputString.length; i++) {
        hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = '#';
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).substr(-2);
      }
      return color;
    } else {
      return '#000000';
    }
  }

  getMessageBubbleWidth(text: string): string {
    const maxWidth = 300;
    const minWidth = 50;
    const measureElement = document.createElement('span');
    measureElement.style.visibility = 'hidden';
    measureElement.style.whiteSpace = 'pre';
    measureElement.innerText = text;
    document.body.appendChild(measureElement);
    const width = Math.max(measureElement.offsetWidth, minWidth);
    document.body.removeChild(measureElement);
    return Math.min(width, maxWidth) + 'px';
  }
}
