import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Assistir a vídeo aula e depois colocar em prática o conteúdo',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar typescript'
    },
    {
      id: 2,
      descricao: 'Ir a academia terça-feira e malhar costas',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Ir a academia'
    },
    {
      id: 3,
      descricao: 'Voltar a estudar inglês',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Inglês'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas', // nome do reducer
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      // pega o index da tarefa que foi passada

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
      // pega a tarefa e atribui os novos valores
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
