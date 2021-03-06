import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

import uuid from 'uuid';

class Field extends Component {
  id = uuid();
}

export default setComponentTemplate(
  hbs`
  <div class='input-field' ...attributes>

    {{#if @label}}
      <label
        class={{if @hidden 'hide-xs-up'}}
        for={{this.id}}
      >
        {{@label}}
      </label>
    {{/if}}

    {{yield this.id}}
  </div>
  `,
  Field
);
