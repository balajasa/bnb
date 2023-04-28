import { defineStore } from 'pinia'
import fetch from 'cross-fetch'

export const useTodos = defineStore('todos', {
  state: () => ({
    todoList: [],
    test: {}
  }),
  getters: {
    data: (state) => () => state.test
  },
  actions: {
    async fetchData() {
      const res = await fetch('https://star-wars.brillout.com/api/films/1.json')
      this.test = res;
    }
  }
})
