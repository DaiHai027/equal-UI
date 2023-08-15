export default {
  title: '介绍',
  description:
    '{0} 是一种注重为所有用户创建可访问、直观和易于使用的用户界面的设计理念，无论用户的身体能力或技术经验如何。它涉及创建在不同设备和平台上视觉和功能一致，并且易于残障人士或特殊需求人士导航和使用的用户界面。Equal UI 的目标是为所有用户创建更具包容性和公平性的用户体验，通过设计易于理解和使用的界面。',
  how_works: {
    label: '工作原理',
    content:
      '每个组件的模板都包含带有变体块的标签。这个示例展示了 {0} 的简短版本：',
  },
  types: {
    title:
      'Equal UI 中有一个样式源。这是一个包含每个组件的类的对象的文件。有 3 种不同的类型：',
    type1: {
      name: 'Full:',
      description: '{0} 包含了浅色和深色主题的类',
    },
    type2: {
      name: 'Light:',
      description: '{0} 包含了浅色主题的类',
    },
    type3: {
      name: 'Dark:',
      description: '{0} 包含了深色主题的类',
    },
  },
  blocks_title: '这是块 {0} 的外观：',
  variants: {
    title:
      '{0} 包含了组件的每个主要部分的条目，并对它们应用永久类 {1} 包含了组件的每个变体的条目。默认变体会自动应用。所选变体中的类会在 {2} 的基础上应用类。',
    result: '结果：',
    usage1: {
      title:
        '要将变体应用于组件，您需要使用 {0} 属性，它适用于每个 Equal UI 组件。',
    },
    usage2: {
      title:
        '此外，您还可以通过 {0} 属性创建内联变体。您可以同时使用多个变体！',
    },
  },
  note: 'Equal UI 使用 Tailwindcss 作为类提供者。但如果您愿意，您可以使用自己的类或其他实用程序类提供者。',
  create_theme: {
    title: '如何创建自己的主题？',
    theme: '主题',
    step1: '要创建自己的主题，请阅读 {0}',
    step2: '此外，在每个组件的页面上，不要犹豫使用自定义功能',
  },
  next: {
    title: '接下来是什么？',
    start: '开始使用',
    contribute: '如何贡献？',
    support: '支持项目',
  },
}
