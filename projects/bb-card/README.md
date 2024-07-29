# BbCard

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.
It is an angular component-library (of course)

## Components
CardInputComponent
CardExpiryComponent
OtpInputComponent

Run `ng generate component component-name --project bb-card` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project bb-card`.
> Note: Don't forget to add `--project bb-card` or else it will be added to the default project in your `angular.json` file. 

## Usage
### CardInputComponent
> Note: it currently only supports Visa, mastercard, AmericanExpress and Rupay, support for more will come in future updates

import {CardInputComponent} from 'bb-card'\
Add the following to your build assets
##
<tab><tab>  {
                "glob": "**/*",
                "input": "./node_modules/bb-card/assets",
                "output": "/assets/bb-card/"
            }

#### Template
`<bb-card-input>\</bb-card-input>`
#### Inputs
|name|description|
|----|-----------|
|placeholder|The placeholder text for the form control|

#### Outputs
| Name | Description |
|------|--------------|
| updateCardType | emitted when a card type is detected as the user starts entering the card number |

#### Style customization (css variables)
| Name | Description |
|------|--------------|
| --color | font color of the component |
| --padding-right | right padding(This is important because the position of the card branding icons uses this value) |
| --padding-left | Left padding|
| --padding-bottom | bottom padding |
| --padding-top | Top padding |


&nbsp;
&nbsp;
### CardExpiryComponent
import {CardExpiryComponent} from 'bb-card'
import {CardExpiry} from 'bb-card' (Optional)
> NB: CardExpiry is just an interface with a month and year property. you can import this to use with a typed form
#### Template
`<bb-card-input>\</bb-card-input>`
#### Inputs
|name|description|
|----|-----------|
|placeholder|The placeholder text for the form control|

#### Style customization (css variables)
| Name | Description | Default |
|------|--------------|---------|
| --text-alignment | akin to text-align css property  | center |
| --color | akin to css property: color | #000 |



&nbsp;
&nbsp;
### OtpInputComponent
import {OtpInputComponent} from 'bb-card'
#### Template
`<bb-otp-input>\</bb-otp-input>`
#### Inputs
| Name | Description | Default |
|------|--------------|---------|
| mode | if mode = 'numeric' fields only accept numbers. | 'numeric' |
| length | number of characters of the otp | 6 |
| autofocus | Whether there should be an autofocus on opt input when it renders or not | true |

#### Style customization (css variables)
| Name | Description | Default |
|------|--------------|---------|
| --color | font color of the component | #000 |
| --cell-border | border properties of cell | 2px solid #aaa |
| --cell-spacing | spacing between cells | 8px |
| --cell-padding | padding on each cell | 4px 0 |
