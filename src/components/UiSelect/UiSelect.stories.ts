import type { Meta, StoryObj } from '@storybook/vue3'
import UiSelect from '../UiSelect/UiSelect.vue'

const meta = {
  title: 'Components/UiSelect',
  component: UiSelect,
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Выбранное значение'
    },
    isDisabled: {
      control: 'boolean',
      description: 'Блокировка селекта'
    },
    placeholder: {
      control: 'text',
      description: 'Текст подсказки'
    },
    options: {
      control: 'object',
      description: 'Массив вариантов'
    }
  },
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Выберите значение',
    options: ['255.255.255.0', '255.255.0.0', '255.0.0.0', '255.255.255.255']
  }
} satisfies Meta<typeof UiSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    modelValue: '255.255.255.0' // ✅ Исправлена опечатка
  }
}