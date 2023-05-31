export interface Schema {
    title: string;
    description: string;
    details: string;
  };

interface Prices {
  title: string;
  prices: string;
  methods: string;
  documents: string;
}

export interface SchemaServices extends Schema {
  prices: Prices[]
  }

  
 