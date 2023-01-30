import { create } from 'zustand';
import createCarsSlice, { CarsSlice } from './createCarsSlice'
import createAuthSlice, { AuthSlice } from './createAuthSlice'

export type MyState =
  CarsSlice
  & AuthSlice

const useStore = create<MyState>()((...a) => ({
  ...createCarsSlice(...a),
  ...createAuthSlice(...a),
}))

export default useStore;
