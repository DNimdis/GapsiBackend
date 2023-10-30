class Name {
  constructor(name, provicerDBRepository) {
    this.name = name;
    this.provicerDBRepository=provicerDBRepository;
  }

  async isUnique() {
    // Lógica para verificar unicidad del nombre usando provicerDBRepository.isNameUnique
    //return false;
    console.log(this.name);
    const isUnique = await this.provicerDBRepository.isNameUnique(this.name);
    return isUnique;
  }

  // Resto de la implementación...
}

module.exports = Name;