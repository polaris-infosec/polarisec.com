import {GetterTree, ActionTree, MutationTree} from 'vuex'

export const state = () => ({
  things: [] as string[],
  lang: 'en',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  lang: state => state.lang,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_LANGUAGE: (state, newLang: string) => (state.lang = newLang),
}

export const actions: ActionTree<RootState, RootState> = {
  async changeLanguage({commit}, lang: string) {
    commit('CHANGE_LANGUAGE', lang)
  },
}
