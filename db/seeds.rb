# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.create(title: 'Hello World', description: 'Create a React app with ruby on rails')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
  { title: '1. Приложение написано на Ruby on Rails и React.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/iEt_KlnDjpk', section: section },
  { title: '2. Добавляем React в приложение Rails.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/iEt_KlnDjpk', section: section },
  { title: '3. Добавляем Hello World.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/iEt_KlnDjpk', section: section },
  { title: '4. Добавляем React Router Dom в приложение.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/iEt_KlnDjpk', section: section },
])
