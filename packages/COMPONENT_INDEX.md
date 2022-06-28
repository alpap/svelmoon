# Component Index

> 32 components exported from undefined@undefined.

## Components

- [`Avatar`](#avatar)
- [`Button`](#button)
- [`ButtonGroup`](#buttongroup)
- [`Code`](#code)
- [`Col`](#col)
- [`Content`](#content)
- [`Context`](#context)
- [`Divider`](#divider)
- [`DropDown`](#dropdown)
- [`Figure`](#figure)
- [`Footer`](#footer)
- [`FooterColumn`](#footercolumn)
- [`FooterSocial`](#footersocial)
- [`Header`](#header)
- [`HeaderDropdown`](#headerdropdown)
- [`HeaderItem`](#headeritem)
- [`HeaderPosition`](#headerposition)
- [`Hero`](#hero)
- [`Image`](#image)
- [`Input`](#input)
- [`LabeledDivider`](#labeleddivider)
- [`Link`](#link)
- [`List`](#list)
- [`LoginScreen`](#loginscreen)
- [`Modal`](#modal)
- [`ModalBody`](#modalbody)
- [`ModalFooter`](#modalfooter)
- [`Row`](#row)
- [`SideMenu`](#sidemenu)
- [`SideMenuFooter`](#sidemenufooter)
- [`SideMenuHeader`](#sidemenuheader)
- [`SideSubMenu`](#sidesubmenu)

---

## `Avatar`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                  | Default value                                         | Description |
| :-------- | :------- | :--------------- | :------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------- |
| src       | No       | <code>let</code> | No       | <code>string</code>                                   | <code>''</code>                                       | --          |
| alt       | No       | <code>let</code> | No       | <code>string</code>                                   | <code>'avatar'</code>                                 | --          |
| text      | No       | <code>let</code> | No       | <code>string</code>                                   | <code>''</code>                                       | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code> | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code> | --          |

### Slots

None.

### Events

None.

## `Button`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                                                                             | Default value                                                                                                                                                                                    | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| variant   | No       | <code>let</code> | No       | <code>'primary' &#124; 'transparent' &#124; 'light' &#124; 'dark' &#124; 'black' &#124; 'link' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger' &#124; 'outline' &#124; ''</code> | <code>'primary' &#124; 'transparent' &#124; 'light' &#124; 'dark' &#124; 'black' &#124; 'link' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger' &#124; 'outline' &#124; ''</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code>                                                                                                                                            | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code>                                                                                                                                            | --          |
| shape     | No       | <code>let</code> | No       | <code>'circle' &#124; 'square' &#124; 'pill'</code>                                                                                                                                              | <code>'circle' &#124; 'square' &#124; 'pill'</code>                                                                                                                                              | --          |
| loading   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>false</code>                                                                                                                                                                               | --          |
| grow      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>true</code>                                                                                                                                                                                | --          |
| animated  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>true</code>                                                                                                                                                                                | --          |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>false</code>                                                                                                                                                                               | --          |
| right     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>false</code>                                                                                                                                                                               | --          |
| left      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>false</code>                                                                                                                                                                               | --          |
| disabled  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                             | <code>false</code>                                                                                                                                                                               | --          |
| text      | No       | <code>let</code> | No       | <code>string</code>                                                                                                                                                                              | <code>''</code>                                                                                                                                                                                  | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `ButtonGroup`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                                                                   | Default value                                                                                                                                                                          | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| selected  | No       | <code>let</code> | Yes      | <code>number</code>                                                                                                                                                                    | <code>-1</code>                                                                                                                                                                        | --          |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                   | <code>false</code>                                                                                                                                                                     | --          |
| variant   | No       | <code>let</code> | No       | <code>'primary' &#124; 'transparent' &#124; 'light' &#124; 'dark' &#124; 'black' &#124; 'link' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger' &#124; 'outline'</code> | <code>'primary' &#124; 'transparent' &#124; 'light' &#124; 'dark' &#124; 'black' &#124; 'link' &#124; 'info' &#124; 'success' &#124; 'warning' &#124; 'danger' &#124; 'outline'</code> | --          |
| size      | No       | <code>let</code> | No       | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code>                                                                                                                                  | <code>'xs' &#124; 'sm' &#124; 'lg' &#124; 'xl'</code>                                                                                                                                  | --          |
| shape     | No       | <code>let</code> | No       | <code>'circle' &#124; 'square' &#124; 'pill'</code>                                                                                                                                    | <code>'circle' &#124; 'square' &#124; 'pill'</code>                                                                                                                                    | --          |
| grow      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                   | <code>true</code>                                                                                                                                                                      | --          |
| animated  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                                                                                                   | <code>true</code>                                                                                                                                                                      | --          |
| buttons   | No       | <code>let</code> | No       | <code>['']</code>                                                                                                                                                                      | <code>['']</code>                                                                                                                                                                      | --          |

### Slots

None.

### Events

None.

## `Code`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| language  | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Col`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                                                         | Default value                                                                                                                                | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| md        | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |
| xs        | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |
| sm        | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |
| lg        | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |
| xl        | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |
| offset    | No       | <code>let</code> | No       | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | <code>'1' &#124; '2' &#124; '3' &#124; '4' &#124; '5' &#124; '6' &#124; '7' &#124; '8' &#124; '9' &#124; '10' &#124; '11' &#124; '12'</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Content`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Context`

### Props

None.

### Slots

None.

### Events

None.

## `Divider`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| vertical  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

None.

### Events

None.

## `DropDown`

### Props

| Prop name   | Required | Kind             | Reactive | Type                                              | Default value                                     | Description |
| :---------- | :------- | :--------------- | :------- | ------------------------------------------------- | ------------------------------------------------- | ----------- |
| selected    | No       | <code>let</code> | Yes      | <code>string</code>                               | <code>''</code>                                   | --          |
| transparent | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| light       | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| dark        | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| black       | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| primary     | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| link        | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| info        | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| success     | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| warning     | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| danger      | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| outline     | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| xsmall      | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| small       | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| large       | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| xlarge      | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| squared     | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| animated    | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| fluid       | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| values      | No       | <code>let</code> | No       | <code>[{ text: '', href: '' }] &#124; ['']</code> | <code>[{ text: '', href: '' }] &#124; ['']</code> | --          |
| disabled    | No       | <code>let</code> | No       | <code>boolean</code>                              | <code>false</code>                                | --          |
| text        | No       | <code>let</code> | No       | <code>string</code>                               | <code>''</code>                                   | --          |

### Slots

None.

### Events

None.

## `Figure`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| src       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| alt       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| caption   | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| height    | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| width     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

None.

### Events

None.

## `Footer`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| title     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| company   | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| year      | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| fixed     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |
| social    | No      | --    | --       |

### Events

None.

## `FooterColumn`

### Props

| Prop name | Required | Kind             | Reactive | Type                                  | Default value                         | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------- | ------------------------------------- | ----------- |
| items     | No       | <code>let</code> | No       | <code>[{ text: '', href: '' }]</code> | <code>[{ text: '', href: '' }]</code> | --          |

### Slots

None.

### Events

None.

## `FooterSocial`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Header`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| animated  | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| fixed     | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| dark      | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| href      | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| title     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| src       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| expander  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `HeaderDropdown`

### Props

| Prop name | Required | Kind             | Reactive | Type                                  | Default value                         | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------- | ------------------------------------- | ----------- |
| text      | No       | <code>let</code> | No       | <code>string</code>                   | <code>''</code>                       | --          |
| items     | No       | <code>let</code> | No       | <code>[{ text: '', href: '' }]</code> | <code>[{ text: '', href: '' }]</code> | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code>                  | <code>false</code>                    | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `HeaderItem`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value     | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ----------------- | ----------- |
| href      | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>   | --          |
| text      | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>   | --          |
| center    | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code> | --          |
| icon      | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>   | --          |

### Slots

None.

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `HeaderPosition`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| left      | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| right     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| center    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Hero`

### Props

| Prop name  | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :--------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| fullscreen | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| parallax   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

| Event name | Type      | Detail |
| :--------- | :-------- | :----- |
| click      | forwarded | --     |

## `Image`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| contain   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| cover     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| stretch   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| height    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| width     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| src       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| alt       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| lazy      | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

None.

### Events

None.

## `Input`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                           | Default value                                                                                                  | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| valid     | No       | <code>let</code> | Yes      | <code>boolean</code>                                                                                           | <code>true</code>                                                                                              | --          |
| xsmall    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| small     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| large     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| xlarge    | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| grow      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| value     | No       | <code>let</code> | No       | <code>string</code>                                                                                            | <code>'' &#124; 0</code>                                                                                       | --          |
| min       | No       | <code>let</code> | No       | <code>number</code>                                                                                            | <code>0</code>                                                                                                 | --          |
| max       | No       | <code>let</code> | No       | <code>number</code>                                                                                            | <code>100</code>                                                                                               | --          |
| required  | No       | <code>let</code> | No       | <code>boolean</code>                                                                                           | <code>false</code>                                                                                             | --          |
| label     | No       | <code>let</code> | No       | <code>string</code>                                                                                            | <code>''</code>                                                                                                | --          |
| type      | No       | <code>let</code> | No       | <code>'text' &#124; 'password' &#124; 'email' &#124; 'number' &#124; 'tel' &#124; 'url' &#124; 'search'</code> | <code>'text' &#124; 'password' &#124; 'email' &#124; 'number' &#124; 'tel' &#124; 'url' &#124; 'search'</code> | --          |

### Slots

None.

### Events

None.

## `LabeledDivider`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| vertical  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| label     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |

### Slots

None.

### Events

None.

## `Link`

### Props

| Prop name  | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :--------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| href       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| underline  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| square     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| crisscross | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| center     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| ltr        | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| text       | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |

### Slots

None.

### Events

None.

## `List`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| numbered  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| plain     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| detailed  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| title     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| values    | No       | <code>let</code> | No       | <code>[]</code>      | <code>[]</code>    | --          |

### Slots

None.

### Events

None.

## `LoginScreen`

### Props

| Prop name | Required | Kind             | Reactive | Type                | Default value   | Description |
| :-------- | :------- | :--------------- | :------- | ------------------- | --------------- | ----------- |
| image     | No       | <code>let</code> | No       | <code>string</code> | <code>''</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Modal`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| show      | No       | <code>let</code> | Yes      | <code>boolean</code> | <code>false</code> | --          |
| title     | No       | <code>let</code> | No       | <code>string</code>  | <code>''</code>    | --          |
| dropdown  | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| zoomin    | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| zoomout   | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| small     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |
| large     | No       | <code>let</code> | No       | <code>boolean</code> | <code>false</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `ModalBody`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `ModalFooter`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `Row`

### Props

| Prop name | Required | Kind             | Reactive | Type                                                                                                     | Default value                                                                                            | Description |
| :-------- | :------- | :--------------- | :------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------- |
| space     | No       | <code>let</code> | No       | <code>boolean</code>                                                                                     | <code>true</code>                                                                                        | --          |
| wrap      | No       | <code>let</code> | No       | <code>boolean</code>                                                                                     | <code>true</code>                                                                                        | --          |
| align     | No       | <code>let</code> | No       | <code>'stretch' &#124; 'start' &#124; 'center' &#124; 'end' &#124; 'baseline'</code>                     | <code>'stretch' &#124; 'start' &#124; 'center' &#124; 'end' &#124; 'baseline'</code>                     | --          |
| justify   | No       | <code>let</code> | No       | <code>'start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'around' &#124; 'evenly'</code> | <code>'start' &#124; 'center' &#124; 'end' &#124; 'space-between' &#124; 'around' &#124; 'evenly'</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `SideMenu`

### Props

| Prop name | Required | Kind             | Reactive | Type                 | Default value      | Description |
| :-------- | :------- | :--------------- | :------- | -------------------- | ------------------ | ----------- |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| show      | No       | <code>let</code> | No       | <code>boolean</code> | <code>true</code>  | --          |
| width     | No       | <code>let</code> | No       | <code>string</code>  | <code>'20%'</code> | --          |

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `SideMenuFooter`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `SideMenuHeader`

### Props

None.

### Slots

| Slot name | Default | Props | Fallback |
| :-------- | :------ | :---- | :------- |
| --        | Yes     | --    | --       |

### Events

None.

## `SideSubMenu`

### Props

| Prop name | Required | Kind             | Reactive | Type                                  | Default value                         | Description |
| :-------- | :------- | :--------------- | :------- | ------------------------------------- | ------------------------------------- | ----------- |
| title     | No       | <code>let</code> | No       | <code>string</code>                   | <code>''</code>                       | --          |
| icon      | No       | <code>let</code> | No       | <code>string</code>                   | <code>''</code>                       | --          |
| values    | No       | <code>let</code> | No       | <code>[{ href: '', text: '' }]</code> | <code>[{ href: '', text: '' }]</code> | --          |
| fluid     | No       | <code>let</code> | No       | <code>boolean</code>                  | <code>false</code>                    | --          |
| squared   | No       | <code>let</code> | No       | <code>boolean</code>                  | <code>false</code>                    | --          |
| href      | No       | <code>let</code> | No       | <code>string</code>                   | <code>''</code>                       | --          |

### Slots

None.

### Events

None.
