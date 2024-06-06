import { FormContainer, MinutesInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../..'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return activeCycle ? (
    <h1>{activeCycle.task}</h1>
  ) : (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestion">
        <option value=""></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
