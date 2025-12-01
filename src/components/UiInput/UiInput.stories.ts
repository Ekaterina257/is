import type { Meta, StoryObj } from '@storybook/vue3'
import UiInput from '../UiInput/UiInput.vue'

const meta = {
  title: 'Components/UiInput',
  component: UiInput,
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Текущее значение поля'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Блокировка поля'
    },
    placeholder: {
      control: 'text',
      description: 'Текст-подсказка'
    }
  },
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите IP-адрес'
  }
} satisfies Meta<typeof UiInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}