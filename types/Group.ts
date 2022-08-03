import { ComponentAmountPerAgeAmountPerAge } from '@/graphql/generated';

const amountPerAgeDefault = {
  baby: {
    id: '1',
    amount: 0,
  },
  adult: {
    id: '2',
    amount: 0,
  },
  teenager: {
    id: '3',
    amount: 0,
  },
  children: {
    id: '4',
    amount: 0,
  },
}

type AgeModel = {
  quantity: number
}

class QuantityPerAges {
  adult: AgeModel
  teenager: AgeModel
  children: AgeModel
  baby: AgeModel

  constructor(adult: AgeModel, teenager: AgeModel, children: AgeModel, baby: AgeModel) {
    this.adult = adult
    this.teenager = teenager
    this.children = children
    this.baby = baby
  }
}

const quantityPerAges = new QuantityPerAges(
  { quantity: 1 },
  { quantity: 2 },
  { quantity: 3 },
  { quantity: 4 }
)

const calculateAmountPerAge = (amountPerAge: any, quantityPerAge: any) =>
  Object.keys(quantityPerAge).map((age) => {
    if (!amountPerAge[age])
      throw new Error(`Age ${age} is not defined in amountPerAge`)
    return {
      age,
      amount: amountPerAge[age].amount * quantityPerAge[age].quantity,
    }
  })

const calculateAmountPerAgeTotal = (amountPerAge: any) =>
  amountPerAge.reduce((acc: number, curr: any) => acc + curr.amount, 0) * 100

export {
  quantityPerAges,
  QuantityPerAges,
  calculateAmountPerAge,
  calculateAmountPerAgeTotal,
  amountPerAgeDefault,
}
