# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Trait.create!(
    name: 'norm',
    trait_type: 'body_type'
)

Trait.create!(
    name: 'slim',
    trait_type: 'body_type'
)

Trait.create!(
    name: 'orange',
    trait_type: 'species'
)

Trait.create!(
    name: 'gray',
    trait_type: 'species'
)

Trait.create!(
    name: 'round',
    trait_type: 'eye_type'
)

Trait.create!(
    name: 'slit',
    trait_type: 'eye_type'
)

Trait.create!(
    name: 'green',
    trait_type: 'eye_color'
)

Trait.create!(
    name: 'blue',
    trait_type: 'eye_color'
)

Trait.create!(
    name: 'brown',
    trait_type: 'eye_color'
)

Trait.create!(
    name: 'agape',
    trait_type: 'kissiepie'
)

Trait.create!(
    name: 'tongue',
    trait_type: 'kissiepie'
)

Trait.create!(
    name: 'black',
    trait_type: 'nose_color'
)

Trait.create!(
    name: 'pink',
    trait_type: 'nose_color'
)


traits = Trait.all
p "Created #{Trait.count} Traits"
