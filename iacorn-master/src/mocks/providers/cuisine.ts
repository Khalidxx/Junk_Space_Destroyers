import { Injectable } from "@angular/core";

import { Cuisine, Category } from "../../models";

@Injectable()
export class Cuisines {
  cuisines: Cuisine[] = [];
  constructor() {
    let cuisines = [];

    for (let cuisine of cuisines) {
      this.cuisines.push(cuisine);
    }
  }

  query() {
    return this.cuisines;
  }
}

export interface Cuisine {
  imageLink: string;
  name: string;
  basePrice: number;
  additions: Addition[];
}

interface Option {
  name: string;
  plusPrice: number;
}

interface Addition {
  name: string;
  options: Option[];
}

@Injectable()
export class CategoryListProvider {
  categories: Category[] = [];
  constructor() {
    let categories = [
      {
        id: "1",
        name: "新品推荐",
        cuisines: [
          {
            id: "1",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          },
          {
            id: "2",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          },
          {
            id: "3",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: null
          },
          {
            id: "4",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          },
          {
            id: "5",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          },
          {
            id: "6",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          },
          {
            id: "7",
            imageLink:
              "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg?cs=srgb&dl=beef-bowl-cooking-262897.jpg&fm=jpg",
            name: "板面",
            basePrice: 16,
            additions: [
              {
                name: "规格",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "大",
                    plusPrice: 2
                  },
                  {
                    id: "2",
                    name: "中",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "小",
                    plusPrice: 0
                  }
                ]
              },
              {
                name: "辣度",
                default: "1",
                options: [
                  {
                    id: "1",
                    name: "不辣",
                    plusPrice: 0
                  },
                  {
                    id: "2",
                    name: "中辣",
                    plusPrice: 1
                  },
                  {
                    id: "3",
                    name: "麻辣",
                    plusPrice: 2
                  }
                ]
              }
            ]
          }
        ]
      }
    ];

    for (let category of categories) {
      this.categories.push(category);
    }
  }

  query(id: number) {
    console.log(id);
    return this.categories;
  }
}
