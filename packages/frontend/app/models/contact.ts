import { attr } from '@ember-data/model';
import Identity from './identity';

export const Status = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  AWAY: 'away',
  BUSY: 'busy',
};

export enum STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  AWAY = 'away',
  BUSY = 'busy',
}

export default class Contact extends Identity {
  @attr() onlineStatus?: STATUS;
  @attr() isPinned?: boolean;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  interface ModelRegistry {
    contact: Contact;
  }
}
