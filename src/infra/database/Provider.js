const fs = require('fs/promises');

class Provider {
  
    paginate={};

    constructor() {
      this.filePath = './bd.json';
      this.defaultPageSize = 10; 
    }
  
    async readData() {
      try {
        const data = await fs.readFile(this.filePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        // Si el archivo no existe, se devuelve un array vacío.
        if (error.code === 'ENOENT') {
          return [];
        }
        throw error;
      }
    }

    async findAll() {
        const data = await this.readData();
        return data;
    }

    
    async writeData(data) {
      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2));
    }


    async getNextId() {
      const data = await this.readData();
      const maxId = data.reduce((max, item) => (item.id > max ? item.id : max), 0);
      return maxId + 1;
    }
  
    async create(item) {
      const data = await this.readData();
      const nextId = await this.getNextId();
      const newItem = { ...item, id: nextId };
      data.push(newItem);
      await this.writeData(data);
      return newItem;
    }
  
    async read() {
      const data = await this.readData();
      return data;
    }
  
    async update(id, updatedItem) {      
      
      const data = await this.readData();
      const existElement = (element) => element.id == id;      
      const index = data.findIndex(existElement);      
      if (index !== -1) {
        data[index] = { ...updatedItem, id }; // Mantén el mismo ID
        await this.writeData(data);
        return data[index];
      } else {
        throw new Error('Elemento no encontrado.');
      }
    }
  
    async delete(id) {
      const data = await this.readData();
      const existElement = (element) => element.id == id;  
      const index = data.findIndex(existElement);
      if (index !== -1) {
        data.splice(index, 1);
        await this.writeData(data);
        return true;
      } else {
        throw new Error('Elemento no encontrado.');
      }
    }
    
    async findByName(name) {
      const data = await this.readData();
      const existElement = (element) => element.fullName == name;      
      const index = data.findIndex(existElement);      
      if (index !== -1) {       
        return data[index];
      } else {
        return false;
      }
    }
  }
  
  module.exports = Provider;