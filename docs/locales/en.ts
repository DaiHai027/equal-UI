export default {
  landing: {
    title:
      'Elevate your design with customizable Vue 3 component library, featuring over 30 components built on top of Tailwind CSS',
    get_started: 'Get started',
    components: 'COMPONENTS',
    button: 'Button',
    button_text: 'Start Building',
    slider: 'Slider',
    colorpicker: 'Colorpicker',
    colorpicker_text: 'Colorpicker with colord library support',
    textarea: {
      header: 'Textarea',
      label: 'Biography',
      placeholder: 'This story begins with...',
    },
    input: {
      header: 'Input',
      label: 'Name',
      placeholder: 'Write your name',
    },
    checkboxes: {
      header: 'Checkboxes',
      text: 'Checkboxes with customizations',
      checkbox_label_1: 'Find an idea',
      checkbox_label_2: 'Start building',
      checkbox_label_3: 'Make UI',
      checkbox_label_4: 'Buy Twitter',
      checkbox_label_5: 'Make AI sentient',
    },
    themes: {
      title: 'LIGHT AND DARK THEMES',
      text: 'Built-in dark theme, try this switch',
      toggle_desc: 'This toggle is Equal UI component too',
    },
    owntheme: {
      title: 'BUILD YOUR OWN THEME',
      subtitle:
        "CUSTOMIZE YOUR USER INTERFACE WITH TAILWIND CLASSES USING EQUAL UI'S ADVANCED CUSTOMIZATION FEATURE",
      text: 'Every component has multiple variations, and you can create your own variations at the build and runtime',
    },
    tag_text: 'Welcome!',
  },
  sidebar: {
    notfound: '😞 Oops, component not found.',
    soon: 'Soon',
    search: {
      label: 'Search',
      placeholder_1: 'Search',
      placeholder_2: 'Datepicker',
      placeholder_3: 'Modal',
      placeholder_4: 'Avatar',
      placeholder_5: 'Checkbox',
      placeholder_6: 'Tooltip',
      placeholder_7: 'Button',
    },
    introduction: 'Introduction',
    getting_started: 'Getting started',
    theming: 'Theming',
    contribution: 'Contribution',
    support: 'Support',
    button: 'Button',
    divider: 'Divider',
    checkbox: 'Checkbox',
    colorpicker: 'Colorpicker',
    datepicker: 'Datepicker',
    input: 'Input',
    number_input: 'Number Input',
    radio: 'Radio',
    select: 'Select',
    slider: 'Slider',
    switch: 'Switch',
    textarea: 'Textarea',
    toggle: 'Toggle',
    alert: 'Alert',
    drawer: 'Drawer',
    spinner: 'Spinner',
    loading_bar: 'Loading bar',
    modal: 'Modal',
    notification: 'Notification',
    popover: 'Popover',
    progress_bar: 'Progress bar',
    avatar: 'Avatar',
    collapse: 'Collapse',
    badge: 'Badge',
    tag: 'Tag',
    tabs: 'Tabs',
    tooltip: 'Tooltip',
    dropdown: 'Dropdown',
    breadcrumbs: 'Breadcrumbs',
    steps: 'Steps',
    transitions: 'Transitions',
    directives: 'Directives',
  },
  sponsoring: {
    title: 'Sponsoring',
    first_sponsor: 'Be the first sponsor',
    text: 'As a project maintained by a single person in their free time, your support is crucial in allowing us to continue improving and updating Equal UI. If you are interested in supporting our project and becoming a sponsor, please get in touch. We would be happy to recognize your support on our website and social media channels.',
  },
  sides: {
    top: 'Top',
    bottom: 'Bottom',
    'top-left': 'Top-left',
    'top-right': 'Top-right',
    'bottom-left': 'Bottom-left',
    'bottom-right': 'Bottom-right',
  },
  demobox: {
    props: 'Props',
    source: 'Source code',
    customization: 'Customization',
    'changes-applied':
      'Changes applied here affected everywhere on the website',
    base: 'Base',
    variants: 'Variants',
    'no-variants': 'There are no built-in variants',
    reset: 'Reset to default',
  },
  examplebox: {
    'show-code': 'Show code',
    'hide-code': 'Hide code',
    copy: 'Copy to clipboard',
    template: 'Template',
    code: 'Code',
  },
  support: {
    intro:
      'We are grateful for your interest in supporting Equal UI! Your support helps us to continue developing and maintaining the project, as well as adding new features and improving documentation.',
    ways_to_support_title: 'Ways to Support',
    via_crypto: 'Make a financial contribution via crypto.',
    github_star: 'Star and share the repository on GitHub.',
    promote: 'Promote the project on social media.',
    review:
      "Leave a positive review on the project's listing in package managers.",
    contribute:
      'Contribute to the project by reporting bugs, fixing issues, or implementing new features.',
    donations_title: 'Donations',
    donations_text:
      'At this moment the only way you can support the author is crypto. All donations go towards maintaining the project, development time, and other expenses.',
    cardano_wallet: 'Cardano wallet:',
    eth_wallet: 'Ethereum wallet:',
    thanks:
      'Thank you for your support of Equal UI! It is greatly appreciated and helps to ensure the continued development and improvement of the project.',
    contact: 'For any questions about sponsoring project you can contact',
  },
  theming: {
    wip: 'This page is WIP',
    own_theme_copy:
      'To create your own theme you can copy on of the initial theme files and make your changes to them:',
    own_theme: 'Or make your own theme file from scratch',
    full: 'contains classes for light and dark themes',
    light: 'contains classes for light theme',
    dark: 'contains classes for dark theme',
  },
  contribute: (await import('../pages/Contribute/locale/en')).default,
  alert: (await import('../pages/components/Alert/locale/en')).default,
}
