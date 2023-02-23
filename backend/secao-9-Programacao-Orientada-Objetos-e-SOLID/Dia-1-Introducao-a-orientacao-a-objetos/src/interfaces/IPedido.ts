import ICliente from "./ICliente";
import IItemPedido from "./ItemPedido";

export default class IOrder {
  private _client: ICliente;
  private _itens: IItemPedido[] = [];
  private _formaPagamento: string;
  private _desconto: number;

  constructor(
    client: ICliente,
    items: IItemPedido[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this._itens = items;
    this._formaPagamento = paymentMethod;
    this._desconto = discount;
  }

  get client(): ICliente {
    return this._client;
  }

  set client(value: ICliente) {
    this._client = value;
  }

  get items(): IItemPedido[] {
    return this._itens;
  }

  set items(value: IItemPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._itens = value;
  }

  get paymentMethod(): string {
    return this._formaPagamento;
  }

  set paymentMethod(value: string) {
    this._formaPagamento = value;
  }

  get discount(): number {
    return this._desconto;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  calculateTotal(): number {
    return this._itens
      .reduce((previousValue, item) => {
        const total = previousValue + item.price;

        return total;
      }, 0);
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

