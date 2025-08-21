import { type Product, type Collection, type Contact, type Newsletter, type InsertProduct, type InsertCollection, type InsertContact, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Collections
  getCollections(): Promise<Collection[]>;
  getCollection(id: string): Promise<Collection | undefined>;
  createCollection(collection: InsertCollection): Promise<Collection>;
  
  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter
  getNewsletterSubscribers(): Promise<Newsletter[]>;
  createNewsletterSubscriber(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private products: Map<string, Product> = new Map();
  private collections: Map<string, Collection> = new Map();
  private contacts: Map<string, Contact> = new Map();
  private newsletters: Map<string, Newsletter> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed products based on design reference
    const productData: InsertProduct[] = [
      {
        name: "Silk Blouse",
        price: "$128",
        imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "tops",
        description: "Elegant pink silk blouse perfect for professional and casual wear",
        isNew: "true"
      },
      {
        name: "Pleated Midi",
        price: "$89",
        imageUrl: "https://images.unsplash.com/photo-1551803091-e20673f15770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "skirts",
        description: "Pastel midi skirt with pleated design"
      },
      {
        name: "Cashmere Sweater",
        price: "$245",
        imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "sweaters",
        description: "Soft cashmere sweater in blush pink color"
      },
      {
        name: "Tailored Blazer",
        price: "$198",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "blazers",
        description: "Professional tailored blazer in soft pink tone"
      },
      {
        name: "Statement Dress",
        price: "$156",
        imageUrl: "https://pixabay.com/get/gaf19cf57a051dee59246201d497192ddce183605b454f7f221a947992b8fd99a68d7731e162015ede9d9ef67dc5257f087d1158175f5b7198b62101b23dce599_1280.jpg",
        category: "dresses",
        description: "Statement dress with floral patterns in pink tones"
      },
      {
        name: "Wide-Leg Trousers",
        price: "$134",
        imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "trousers",
        description: "Wide-leg trousers in elegant cream color"
      },
      {
        name: "Wrap Top",
        price: "$76",
        imageUrl: "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "tops",
        description: "Elegant wrap top in pastel pink fabric"
      },
      {
        name: "Maxi Dress",
        price: "$189",
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600",
        category: "dresses",
        description: "Flowing maxi dress in soft lavender shade"
      }
    ];

    productData.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { 
        ...product, 
        id,
        description: product.description || null,
        isNew: product.isNew || null
      });
    });

    // Seed collections
    const collectionData: InsertCollection[] = [
      {
        name: "Spring Elegance",
        description: "Flowing dresses and delicate pieces perfect for the season of renewal.",
        imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
      },
      {
        name: "Professional Chic",
        description: "Sophisticated workwear that commands respect and exudes confidence.",
        imageUrl: "https://pixabay.com/get/g1e485397d454f10d1cf99f9bd458521c2a4d41a1a3db8f39b403106840290d1dffee865def6bb55a70e1b902197f598a8da7f1f1323b048ab7ddc07cf45fbbb2_1280.jpg"
      },
      {
        name: "Evening Glamour",
        description: "Statement pieces for special occasions and memorable moments.",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800"
      }
    ];

    collectionData.forEach(collection => {
      const id = randomUUID();
      this.collections.set(id, { ...collection, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      description: insertProduct.description || null,
      isNew: insertProduct.isNew || null
    };
    this.products.set(id, product);
    return product;
  }

  async getCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }

  async getCollection(id: string): Promise<Collection | undefined> {
    return this.collections.get(id);
  }

  async createCollection(insertCollection: InsertCollection): Promise<Collection> {
    const id = randomUUID();
    const collection: Collection = { ...insertCollection, id };
    this.collections.set(id, collection);
    return collection;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getNewsletterSubscribers(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values());
  }

  async createNewsletterSubscriber(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const existing = Array.from(this.newsletters.values()).find(n => n.email === insertNewsletter.email);
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = randomUUID();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: new Date() 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
