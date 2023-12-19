export function moneyFormatting(money: number) {
  return new Intl.NumberFormat().format(money);
}

type queryObject = {
  [key: string]: string | string[];
};

export function urlQueryStringParse(queryString: string) {
  const searchParams = new URLSearchParams(queryString);
  const result: queryObject = {};

  for (const [key, value] of searchParams) {
    if (!(key in result)) {
      result[key] = value;
      continue;
    }

    const currentValue = result[key];
    if (typeof currentValue === "string") {
      result[key] = [currentValue, value];
    } else {
      currentValue.push(value);
    }
  }

  return result;
}

export function queryStringify(queryObject: queryObject): string {
  const searchParams = new URLSearchParams();
  Object.entries(queryObject).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => searchParams.append(key, item));
    } else {
      searchParams.append(key, value);
    }
  });
  return searchParams.toString();
}
