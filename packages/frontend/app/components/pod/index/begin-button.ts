import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { inject as service } from '@ember/service';
import { reads } from '@ember/object/computed';
import { hbs } from 'ember-cli-htmlbars';

import CurrentUserService from 'emberclear/services/current-user';

class BeginButton extends Component {
  @service currentUser!: CurrentUserService;

  @reads('currentUser.isLoggedIn') isLoggedIn!: boolean;
}

export default setComponentTemplate(
  hbs`
  <LinkTo @route='chat' class='button'>
    {{#if this.isLoggedIn}}
      {{t 'routes.chat'}}
    {{else}}
      {{t 'buttons.begin'}}
    {{/if}}
  </LinkTo>
`,
  BeginButton
);
