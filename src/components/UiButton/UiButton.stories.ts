import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '../UiButton/UiButton.vue'

const meta = {
  title: 'Components/UiButton',
  component: UiButton,
  argTypes: {
    layout: {
      control: 'select', 
      options: ['primary', 'secondary'],
      description: 'Тип кнопки: primary — акцентная, secondary — контурная'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Блокировка кнопки'
    },
    type: {
      control: 'select', 
      options: ['button', 'submit'],
      description: 'HTML-тип кнопки'
    }
  },
  args: {
    layout: 'primary',
    isDisabled: false,
    type: 'button'
  }
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    default: 'Основная кнопка'
  }
}

export const Secondary: Story = {
  args: {
    layout: 'secondary',
    default: 'Вторичная кнопка'
  }
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    default: 'Отключенная кнопка'
  }
}
