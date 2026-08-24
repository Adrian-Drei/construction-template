<script setup lang="ts">
const siteUrl='https://motionconstruction.ph'
const title='Wall Panels, Flooring, Cladding & Mouldings'
const description='Explore premium WPC wall panels, SPC stone flooring, outdoor cladding, flexible panels, PU stone, and PS mouldings from Motion Construction PH.'
useSeoMeta({title,description,robots:'index, follow, max-image-preview:large',ogTitle:`${title} | Motion Construction PH`,ogDescription:description,ogType:'website',ogUrl:`${siteUrl}/products`,ogImage:`${siteUrl}/images/products-hero.webp`,ogImageAlt:'Architectural finish samples from Motion Construction PH',twitterCard:'summary_large_image',twitterTitle:`${title} | Motion Construction PH`,twitterDescription:description,twitterImage:`${siteUrl}/images/products-hero.webp`})
const categories = ["All Materials", "Wall Panels", "Flooring", "Cladding", "Mouldings"]
const activeCategory = ref("All Materials")
const products = [
  { name: "WPC Fluted Wall Panels", category: "Wall Panels", image: "/images/wpc-fluted.webp", alt: "Walnut WPC fluted panels in a warm contemporary living room", description: "Add texture, depth, and rhythm to any interior wall.", finishes: ["#9a6033", "#aa6e38", "#5b371f", "#343431", "#d7cfc0"] },
  { name: "SPC Stone Flooring", category: "Flooring", image: "/images/spc-flooring.webp", alt: "Pale stone-look SPC flooring in a sunlit modern living room", description: "Waterproof. Durable. Beautiful under every step.", finishes: ["#d8d7d3", "#d9c4a2", "#a88d70", "#373a38", "#d4cabb"] },
  { name: "Outdoor WPC Cladding", category: "Cladding", image: "/images/outdoor-cladding.webp", alt: "Walnut WPC cladding along a modern tropical home walkway", description: "Built to withstand the elements. Made to last.", finishes: ["#b37946", "#985423", "#5a301a", "#393a37", "#8a8d88"] },
  { name: "Flexible Wall Panels", category: "Wall Panels", image: "/images/flexible-panels.webp", alt: "Curved flexible fluted panels in a refined cream lounge", description: "Curved, seamless, and versatile wall solutions.", finishes: ["#80512c", "#b8753c", "#aaa9a3", "#403d36", "#d8d0c2"] },
  { name: "PU Stone Panels", category: "Wall Panels", image: "/images/pu-stone.webp", alt: "Ivory PU stone panels behind a dark floating console", description: "Real stone look. Lightweight. Easy to install.", finishes: ["#ded3bf", "#cbb99f", "#a5a29b", "#30312f"] },
  { name: "PS Mouldings", category: "Mouldings", image: "/images/ps-mouldings.webp", alt: "White PS wall mouldings in a bright classical modern room", description: "Clean lines and timeless details for every space.", finishes: ["#f4f2ec", "#e4e0d8", "#dfc39b"] },
]
const visibleProducts = computed(() => activeCategory.value === "All Materials" ? products : products.filter(p => p.category === activeCategory.value))
useHead({link:[{rel:'canonical',href:`${siteUrl}/products`}],script:[{type:'application/ld+json',innerHTML:JSON.stringify({'@context':'https://schema.org','@type':'CollectionPage',name:title,description,url:`${siteUrl}/products`,mainEntity:{'@type':'ItemList',numberOfItems:products.length,itemListElement:products.map((product,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'Product',name:product.name,description:product.description,image:`${siteUrl}${product.image}`,brand:{'@type':'Brand',name:'Motion Construction PH'},category:product.category,url:`${siteUrl}/products#catalog`}}))}})}]})
</script>
<template>
  <div>
    <SiteHeader />
    <main>
      <section class="hero" aria-labelledby="products-title">
        <div class="hero-copy shell"><p class="eyebrow">Product collection</p><h1 id="products-title">Finishes made<br>for real spaces<span>.</span></h1><div class="short-rule"/><p class="hero-description">Carefully selected materials and finishes—crafted for beauty, built for performance, and designed to elevate every space.</p></div>
        <div class="hero-image-wrap"><img :src="'/images/products-hero.webp'" alt="Fluted wood, stone, oak, charcoal panel and white moulding material samples" width="1536" height="1152" fetchpriority="high"></div>
      </section>
      <section id="catalog" class="catalog shell" aria-labelledby="catalog-title"><h2 id="catalog-title" class="sr-only">Product catalog</h2><ProductFilters v-model="activeCategory" :categories="categories" /><TransitionGroup name="product-list" tag="div" class="product-grid"><ProductCard v-for="product in visibleProducts" :key="product.name" :product="product" /></TransitionGroup></section>
      <SampleCta />
    </main>
    <SiteFooter />
  </div>
</template>
