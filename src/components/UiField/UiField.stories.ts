import type { Meta, StoryObj } from '@storybook/vue3'
import UiField from '../UiField/UiField.vue'
import UiInput from '../UiInput/UiInput.vue'

const meta = {
  title: 'Components/UiField',
  component: UiField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст над полем'
    }
  },
  args: {
    label: 'Поле ввода' 
  }
} satisfies Meta<typeof UiField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiField, UiInput },
    template: `
      <UiField label="Поле ввода">
        <UiInput />
      </UiField>
    `
  })
}