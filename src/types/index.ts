export interface OfferItem {
  title: string
  logo_white_src: string
  min_amount: number
  max_amount: number
  currency: string
  percent: {
    rate: string
    type: string
  }
  time_to_get: string
}
