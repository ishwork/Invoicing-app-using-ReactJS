import {
  setCompanyInfoSection,
  setCustomerInfoSection,
  setProductsSection,
} from "./ReduxUtil";

export const barCode =
  "data:image/png;base64,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CiVqa6KJJV5ElMhusQknFb7suE0Tdlf+gwgdXWdxsPovO64If4AsiqOmcRgbf235DxtHaJ2IR0L5sfrvIYGD4jbId2xLPzSA/l0ICAEhIASEgBAYfwSmifDH30iaoRAQAkJACAiBWARE+LEI6vNCQAgIASEgBHqAgAi/B0bSFIWAEBACQkAIxCIgwo9FUJ8XAkJACAgBIdADBET4PTCSpigEhIAQEAJCIBYBEX4sgvq8EBACQkAICIEeICDC74GRNMVuEfjuu+/cMccc47788kt32223uZVWWqnbCRifpvkaAdPtQmCKIiDCn6KG78Oy//jjD3f88cdnU7388svdPPPME5y25V609pdfftltsskm2W133XWX22effdBHZur1qTLfWBt///33mS2XW2456E8z1aB6uBBIhIAIPxGwGjYeAUuCt9yLZpYr5h9++MFdd911boUVVkAfmanXp8p8Y20swp+pbqqHjwECIvwxMIKmUI+AJcFb7hXe/UQg1sYi/H7aXbNuDwERfntYaqSWEbAkeMu9LU9Tw3WEQKyNRfgdGUqPGVsERPhja5r+T+yvv/5yzz//vLvlllvcs88+6/7++2+38cYbu0MOOcTtsMMObo455igt8rPPPnNXXXWVe/zxx93HH3+ctdL//fdft8022wztuVruZZG8++673b777jt5+5prrunuu+8+t/LKK5eGyIljs802c3vttZc7//zz3QMPPOAWWGCB7MzBoYcemp038D984c8eXHLJJe7RRx9166yzTmmcDz74wO2+++7u4IMPzj7nfxDDf+bdd991V1xxhXv44YdHYsbON3/of//951544QV35ZVXZvaYc8453a677upOP/10t8wyywzZIl+Xv7Djjju6Y4891q2xxhpDP6XcNr75eG3bOLfbqquu6o477rgMh1tvvXXIbsX1+DkwOHhb3HnnndmZj08++cSdd9557rHHHnObbrqpu/DCC91GG21Uwo0dl8VW9wkBBgERPoOS7mmEQPEwWXEAT4w+OXoSyf88ye23337unXfeGXrWYYcdViJ8y72WibMEmhPH77//7n7++eehOd90003uoIMOyh79+uuvu5122smdeOKJkwcQ8zndfPPNGdk+9NBDbv3118/+2RPy/vvv7z7//POhqXviOOGEEyYLJXa+fqB//vknw/Ccc85xv/zyS2nss88+O5tH/vfRRx+5Aw880L322mul+5Zddll3++23O1/oNPmzzDeFjXO7+ULzxx9/dN4/i39Fu/l/t+Dg13bDDTdkxam3UxHjDTbYwN1zzz1u+eWXzx5nGbcJzvqMEAghIMKXbyRD4M0333SvvPJKpmKXWGKJTL16AvTqyqvdSy+91M0999zut99+c0cffbR79dVX3cUXX+y23nprN9dcczl/GO3kk0/O/js/pW+5N2ZhPoH7uYxS+E8++aTbaqut3AUXXODWWmst995772Vkvd5662UKfd55551c26+//uo8oSy44ILZtPJ1+P+++uqr3Xzzzee+/vrrrOjx677ooovcFlts4WabbTb31ltvudNOO8198cUX7v7773errbba0NJGzdff/OKLL7o999zTrb766u7cc891a6+99iT5vP/++1mnwv/lbfO33347w9yvpTiHpZZaanK+qfBNZeOc8L3dfKfJ+9+6667r/PqrdrPikBczvpg944wzsi7P/PPPnxW2BxxwgLv33nvdHnvs0Rm+MbbRZ2ddBET4s65tx3JldfuwvjDYfvvtM/WZK+Mi+fj/zgnfcm8MAAzhe5XoW8KrrLJKiSx9u9Z/ftFFF83+/cEHH8wKmmJbP2/ne/LdZZddsvuefvrprIDw2wP5v+Vr8C34nXfeOfvWQN3XBEfN12+LeAX/xBNPZEozn28dPn4rxROTJ63qHO64446sDe7JK/bdBKPmm8rGOeEzdrPi4NdzxBFHuOuvvz4rnvLfK8/H8R0ebzfruDE+rM8KgSoCInz5RDIE/B6+38f0yta3T4ttzmKbPie6l156KVNe+V9dcWC5N2ZhDOFXv8+dz7dK+J9++mlGAp5I8/cK+Hb+jTfeWGr1jnqmb/HvvffeWcu42H7P1zjqsx73o446Kus4oPcZhLZh8ucsueSStecRrFiPmm8qG4cO7dXZzYoD6rDk+FjHteKq+4XAKARE+PKPJAj4PWPfMj3llFNqxy8Svm+b+3YzQ/iWe2MW1ibhe4V91llnZXu3vvjxe8he8fuDcmeeeaabffbZs6kyhL/ddtu5U089dWhpoz77008/ZQcDfcehD4SfysYi/JiI0GdnBQRE+LOCFcdwDbkiXXjhhTOS8S1g3+asU+256vGn0v3p/fwvP9zk98dzorLcGwNLm4Tv5+Hn7Vu6vl3vzy34PeNrr7128rCev+eRRx7JDjLWtfSfeuopt9tuu2WnwIsYMQr/zz//zA77eTz9nvLSSy8dhMYflvPPueaaa9yWW24ZA+HIz47CN5WNLYRvxYFV+NZxkxlAA09JBET4U9Ls6Red71X6Q1/+ANpCCy3kvv322+zQmSeTzTfffJLE8+JgscUWy/aI/ZBpNa8AAAJcSURBVMGw5557zp100knZCfhiN8Byb8wq2yZ8/9Y+fz7Bf01r8cUXz0jdt/V9QZT/5a1////FA3NvvPFGRtj+zxO+30qo/iHC8c/yKt9vLfhuw4orrpgN8eGHH2aHDfNDe/k8/cE5f1Bwww03zA5Ntv3HdDMYf7DMy0L4VhwQ/vk8reNa1qd7hQBCQISPENL1Rgj4r6v5k8q+PVv886eY/XfU/QG0XLX7lvdll12WEXzxz6tgr4ZzAvSfs9xrmXjeefBfrar7898cyA/iWYijOJYnXf8VPE+g2267bemAor/Pf4vBH6o7/PDDh746t8gii2SFkj8HUOyUMPP1Y3sC9/j6rkL1r/q1vFFfDax+RZLF2IJvKhtb7WbBgSV8j5dlXBZf3ScEGARE+AxKuqcRAv5rZP7kvVez/s+T5pFHHumeeeYZ980335T2kz0heULLCckXC574/L999dVXje9lJ24hJCtx5HPIT+Z7wq/7up+/r+7lOHUvvbHMN3++x9iftPfP9qTjv1fvT+L7g4TFF+/kL//xL0Hytiq+E6ALws8LFNYfWBtb7WbBwUL4lnHZtek+IcAgIMJnUNI9QkAICAEhIAR6joAIv+cG1PSFgBAQAkJACDAIiPAZlHSPEBACQkAICIGeIyDC77kBNX0hIASEgBAQAgwCInwGJd0jBISAEBACQqDnCIjwe25ATV8ICAEhIASEAIOACJ9BSfcIASEgBISAEOg5AiL8nhtQ0xcCQkAICAEhwCAgwmdQ0j1CQAgIASEgBHqOgAi/5wbU9IWAEBACQkAIMAj8DzuOCX9B/oU8AAAAAElFTkSuQmCC";

export const logo =
  "data:image/png;base64,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";

/////////////// SAMPLE 1 ///////////////////
const COMPANY_INFO_SAMPLE_1 = {
  logo: logo,
  businessId: "7654321-8",
  email: "test.frinvoice@gmail.com",
  phone: "+358 441234567",
  companyName: "Hive Mind Oy",
  companyVATNumber: "FI1234567",
  companyAddress: "Tykistökatu 4B",
  companyCity: "Turku",
  companyPostalCode: "20520",
  iban: "FI22 1234 5600 0007 85 ",
  swiftCode: "NDEAFIHHXXX",
  referenceNumber: "RF18 5390 0754 7034",
};

export const setCompanyInfoSample1 = (dispatchCallback, data) => {
  setCompanyInfoSection(dispatchCallback, COMPANY_INFO_SAMPLE_1);
};

const CUSTOMER_INFO_SAMPLE_1 = {
  customerName: "Tan Bui Oy",
  customerPhone: "+358 469448551",
  customerBusinessId: "12121212-21",
  customerAddress: "Vanha Viertotie 32 A",
  customerCity: "Helsinki",
  customerPostalCode: "00350",
  customerEmail: "tan.bui@gmail.com",
  invoiceNumber: "987654321",
  invoiceDate: "2021-11-30",
  invoiceDueDate: "2021-12-30",
};

export const setCustomerInfoSample1 = (dispatchCallback, data) => {
  setCustomerInfoSection(dispatchCallback, CUSTOMER_INFO_SAMPLE_1);
};

const PRODUCTS_SAMPLE_1 = [
  {
    ItemName: "Iphone 12 Pro",
    Amount: 1,
    Price: 999,
    VAT: 24,
    Discount: 0,
    Total: 1238.76,
  },
  {
    ItemName: "iPad Air",
    Amount: 1,
    Price: 599,
    VAT: 24,
    Discount: 20,
    Total: 594.2,
  },
  {
    ItemName: "Apple Watch SE",
    Amount: 2,
    Price: 279,
    VAT: 24,
    Discount: 10,
    Total: 622.72,
  },
  /*{
    ItemName: "AirPods",
    Amount: 3,
    Price: 159,
    VAT: 24,
    Discount: 20,
    Total: 473.18,
  },
  {
    ItemName: "MacBook Pro",
    Amount: 1,
    Price: 1300,
    VAT: 24,
    Discount: 12,
    Total: 1418.56,
  },*/
];

export const setProductsSample1 = (dispatchCallback, products) => {
  setProductsSection(dispatchCallback, PRODUCTS_SAMPLE_1);
};

/////////////// SAMPLE 2 ///////////////////
const COMPANY_INFO_SAMPLE_2 = {
  logo: logo,
  businessId: "111111-11",
  email: "company@email.com",
  phone: "+358 441234567",
  companyName: "Example Company 1",
  companyVATNumber: "FI21354678",
  companyAddress: "123 Comp One Street, Comp One District",
  companyCity: "Turku",
  companyPostalCode: "20540",
  iban: "IBAN-1234-4567-7890",
  swiftCode: "SWIFTABCDE",
  referenceNumber: "REF-1234-7899-9877-65441",
};

export const setCompanyInfoSample2 = (dispatchCallback, data) => {
  setCompanyInfoSection(dispatchCallback, COMPANY_INFO_SAMPLE_2);
};

const CUSTOMER_INFO_SAMPLE_2 = {
  customerName: "Tan Bui Oy",
  customerPhone: "+358 112345698",
  customerBusinessId: "212121212-12",
  customerAddress: "321 Cus One Street, Cus One District",
  customerCity: "Helsinki",
  customerPostalCode: "123456",
  customerEmail: "tan@mail.com",
  invoiceNumber: "987654321",
  invoiceDate: "2021-11-30",
  invoiceDueDate: "2021-12-30",
};

export const setCustomerInfoSample2 = (dispatchCallback, data) => {
  setCustomerInfoSection(dispatchCallback, CUSTOMER_INFO_SAMPLE_2);
};

const PRODUCTS_SAMPLE_2 = [
  {
    ItemName: "Product first",
    Amount: 1,
    Price: 10,
    VAT: 24,
    Discount: 1,
    Total: 61,
  },
  {
    ItemName: "Product second",
    Amount: 2,
    Price: 20,
    VAT: 24,
    Discount: 5,
    Total: 44.6,
  },
  {
    ItemName: "Product third",
    Amount: 3,
    Price: 30,
    VAT: 24,
    Discount: 10,
    Total: 101.6,
  },
  /*{
    ItemName: "Product fourth",
    Amount: 4,
    Price: 50,
    VAT: 24,
    Discount: 20,
    Total: 228,
  },
  {
    ItemName: "Product fifth",
    Amount: 5,
    Price: 100,
    VAT: 24,
    Discount: 20,
    Total: 600,
  },*/
];

export const setProductsSample2 = (dispatchCallback, products) => {
  setProductsSection(dispatchCallback, PRODUCTS_SAMPLE_2);
};
