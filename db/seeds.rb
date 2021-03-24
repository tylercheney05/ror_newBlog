cats = ['Food', 'Tech', 'Travel', '$$$']

5.times do
  blog = Blog.create(
    title: Faker::DcComics.villain,
    cat: cats.sample
  )

  3.times do
    post = Post.create(
      title: Faker::DcComics.title,
      body: Faker::Lorem.paragraph,
      author: Faker::DcComics.hero,
      blog_id: blog.id
    )

    Comment.create(
      body: Faker::Lorem.paragraph,
      author: Faker::DcComics.hero,
      post_id: post.id
    )
  end
end

puts 'Data has been seeded'