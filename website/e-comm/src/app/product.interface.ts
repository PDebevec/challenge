export interface Product {
  campaignId: string
  cardTitle: string
  cardDescription: string
  primaryMediaUrl: string
  cardStartDate: string
  cardEndDate: string
  availableQuantity: number
  likes: number
  shares: number
  views: number
  subscribers: number
  unSubscribers: number
  open: number
  discard: number
  totalRevenue: number
  listOfPlans: ListOfPlan[]
  locations: Location[]
  currentWorkflow: string
  IgnEndDate?: string
  id: string
  userId: string
  createdAt: string
  updatedAt: string
  campaignEndDate?: string
  spId?: string
  cardTags?: any[]
  mediaType?: string
  additionalMediaUrls?: any[]
  callToAction?: string
  listOfAttributes?: any[]
  cardQuestion?: any[]
  isPhysicalProduct?: boolean
  returnPolicy?: string
  termsOfServices?: string
  isLocalPriceViewEnabled?: boolean
  segments?: any[]
  startAgeLimit?: number
  endAgeLimit?: number
  gender?: string
  groups?: any[]
  interests?: any[]
  listOfWorkflowStatuses?: any[]
  listOfReviews?: any[]
  totalReviews?: number
  listOfSupportTags?: ListOfSupportTag[]
  comulativeRating?: number
  maxQuantityPerUser?: number
}

export interface ListOfPlan {
  price: Price
  planType?: string
  planName?: string
  planDescription?: string
  isShippingChargesRequired?: boolean
  shippingCharges?: ShippingCharges
  startsOn?: string
  endsOn?: string
  displayPrice?: DisplayPrice
  displayPriceUnit?: string
  displayPriceNotes?: string
  invoicingCylcle?: string
  subsciptionSchedule?: SubsciptionSchedule
  subscriptionPeriod?: SubscriptionPeriod
  appliesTo?: string
  noOfAllowedUsers?: number
  minSubPeriod?: MinSubPeriod
  freeTrialPeriod?: FreeTrialPeriod
  signupFee?: SignupFee
  id?: string
}

export interface Price {
  amount: number
  currency: string
  currencySymbol: string
}

export interface ShippingCharges {
  amount: number
  currency: string
  currencySymbol: string
}

export interface DisplayPrice {
  amount: number
  currency: string
  currencySymbol: string
}

export interface SubsciptionSchedule {
  startDateTime: string
  endDateTime: string
}

export interface SubscriptionPeriod {
  unitOfPeriod: string
  countOfPeriod: number
}

export interface MinSubPeriod {
  unitOfPeriod: string
  countOfPeriod: number
}

export interface FreeTrialPeriod {
  unitOfPeriod: string
  countOfPeriod: number
}

export interface SignupFee {
  amount: number
  currency: string
  currencySymbol: string
}

export interface Location {
  latitude: string
  longitude: string
  area: string
  city: string
  country: string
  placeId: string
  description: string
}

export interface ListOfSupportTag {
  tagName: string
  supportContent: string
}
