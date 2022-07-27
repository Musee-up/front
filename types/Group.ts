type AgeModel = {
  quantity: number
}

type QuantityPerAges = {
  adult: AgeModel
  teenager: AgeModel
  children: AgeModel
  baby: AgeModel
}

const quantityPerAges: QuantityPerAges = {
  adult: {
    quantity: 0,
  },
  teenager: {
    quantity: 0,
  },
  children: {
    quantity: 0,
  },
  baby: {
    quantity: 0,
  },
}
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
}
