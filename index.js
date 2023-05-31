async function fetchProducts() {
  try {
    console.log("Fetching products...");
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("Products data:", data);
    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function renderProducts(products) {
  const productsContainer = document.getElementById("products-container");
  if (Array.isArray(products)) {
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
      `;
      productsContainer.appendChild(productElement);
    });
    console.log("Products rendered:", products);
  } else {
    console.error("Invalid products data:", products);
  }
}

async function fetchAndRenderProducts() {
  const products = await fetchProducts();
  renderProducts(products);
}

async function fetchPosts() {
  try {
    console.log("Fetching posts...");
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log("Posts data:", data);
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

function renderPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  if (Array.isArray(posts)) {
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postElement);
    });
    console.log("Posts rendered:", posts);
  } else {
    console.error("Invalid posts data:", posts);
  }
}

async function fetchAndRenderPosts() {
  const posts = await fetchPosts();
  renderPosts(posts);
}

fetchAndRenderProducts();
fetchAndRenderPosts();

// линк от паркера (https://dummyjson.com/)
