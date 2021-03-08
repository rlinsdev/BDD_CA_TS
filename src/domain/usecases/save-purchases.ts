export interface SavePurchases {
  save: (purchases: Array<SavePurchases.Param>) => Promise<void>
}

namespace SavePurchases {
  export type Param = {
      id: string,
      date: Date,
      value: number
  }
}