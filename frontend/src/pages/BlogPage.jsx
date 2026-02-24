import { Fragment, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { blogPosts } from "../data/blogPosts"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/PageShell"

const POSTS_PER_PAGE = 9

const getPaginationItems = (totalPages, currentPage) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pages = [1]
  const start = Math.max(2, currentPage - 1)
  const end = Math.min(totalPages - 1, currentPage + 1)

  if (start > 2) {
    pages.push("ellipsis-start")
  }

  for (let i = start; i <= end; i += 1) {
    pages.push(i)
  }

  if (end < totalPages - 1) {
    pages.push("ellipsis-end")
  }

  pages.push(totalPages)
  return pages
}

const BlogCard = ({ post }) => (
  <article className="flex h-full flex-col rounded-[32px] bg-white p-5 text-[#0d1438] shadow-[0_18px_55px_rgba(7,13,44,0.1)] transition hover:-translate-y-1">
    <div className="aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-[#f6f7ff]">
      <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
    </div>
    <div className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#a0a9d4]">{post.category}</div>
    <h3 className="mt-2 text-xl font-semibold leading-snug text-[#0a1544]">{post.title}</h3>
    <p className="mt-1 text-sm font-medium text-[#6b7397]">{post.date}</p>
    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#2a3257]">{post.excerpt}</p>
    <div className="mt-4 flex items-center justify-between text-sm text-[#1d2a57]">
      <span className="rounded-full bg-[#eef1ff] px-3 py-1 font-semibold text-[#31408f]">{post.readingTime}</span>
      <button type="button" className="inline-flex items-center font-semibold text-[#e63d84] transition hover:translate-x-1">
        Read More
        <ArrowRight className="ml-1 h-4 w-4" />
      </button>
    </div>
  </article>
)

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) {
      return blogPosts
    }

    return blogPosts.filter((post) =>
      [post.title, post.excerpt, post.category].some((value) => value.toLowerCase().includes(query)),
    )
  }, [searchTerm])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  const heroPost = filteredPosts[0] ?? null
  const listPosts = heroPost ? filteredPosts.slice(1) : []
  const totalPages = Math.max(1, Math.ceil(listPosts.length / POSTS_PER_PAGE) || 1)

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages))
  }, [totalPages])

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = listPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  const paginationItems = getPaginationItems(totalPages, currentPage)

  const renderHero = () => {
    if (!heroPost) {
      return (
        <div className="rounded-[36px] bg-white/80 p-10 text-center text-[#0d1550] shadow-[0_20px_70px_rgba(4,10,32,0.15)]">
          <p className="text-lg font-semibold">No articles match {searchTerm}.</p>
          <p className="mt-2 text-sm text-[#4c5480]">Try searching for a different topic or reset the filter.</p>
        </div>
      )
    }

    return (
      <section className="rounded-[48px] bg-gradient-to-br from-[#fde5ff] via-[#f4f6ff] to-[#e7eeff] p-6 shadow-[0_40px_90px_rgba(9,15,45,0.2)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-[36px] bg-[#ff6fa8]">
            <img src={heroPost.image} alt={heroPost.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="flex flex-col justify-center text-[#0c1542]">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f15b8a]">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#08123c]">{heroPost.title}</h2>
            <p className="mt-2 text-sm font-medium text-[#5f678f]">{heroPost.date}  {heroPost.readingTime}</p>
            <p className="mt-5 text-base leading-relaxed text-[#1b244f]">{heroPost.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#44507a]">
              <span className="rounded-full bg-white/80 px-4 py-1 font-semibold">{heroPost.category}</span>
            </div>
            <Link
              to="#"
              className="mt-8 inline-flex items-center text-base font-semibold text-[#e03a7c] transition hover:translate-x-1"
            >
              Read More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <PageShell tone="dusk">
    <div className="pb-16 pt-8 text-[#0b1134]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-white/40 pb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b94c5]">Insights</p>
              <h1 className="mt-3 text-4xl font-semibold text-[#07103a]">Blogs</h1>
              <p className="mt-2 max-w-2xl text-base text-[#313a63]">
                Partner success stories, performance marketing tactics, and growth frameworks directly from the ClicksMeta team.
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#97a0cd]" />
                <Input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search articles..."
                  className="h-12 rounded-2xl border-none bg-white pl-12 text-[#0c1542] placeholder:text-[#a0a8d8]"
                />
              </div>
              <Button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="h-12 rounded-2xl bg-[#111b44] px-6 text-base font-semibold text-white hover:bg-[#1c2758]"
              >
                Search
              </Button>
            </div>
          </div>
        </header>

        {renderHero()}

        {heroPost && (
          <section className="mt-12">
            <div className="mb-6 flex items-center justify-between text-sm text-[#4d5683]">
              <p>
                Showing <span className="font-semibold text-[#0c1542]">{listPosts.length === 0 ? 0 : startIndex + 1}</span>
                -
                <span className="font-semibold text-[#0c1542]">{Math.min(startIndex + paginatedPosts.length, listPosts.length)}</span>
                {' '}of <span className="font-semibold text-[#0c1542]">{listPosts.length}</span> additional articles
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {listPosts.length === 0 && (
              <p className="mt-8 rounded-3xl bg-white/70 p-6 text-center text-[#343d6a]">No additional articles found.</p>
            )}

            {listPosts.length > 0 && (
              <div className="mt-10 flex flex-col items-center gap-4 text-[#1b2652] md:flex-row md:justify-between">
                <div className="text-sm text-[#5b638d]">
                  Page <span className="font-semibold text-[#0d1438]">{currentPage}</span> of{' '}
                  <span className="font-semibold text-[#0d1438]">{totalPages}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#c7ceef] text-[#1c2452] disabled:opacity-40"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {paginationItems.map((item) =>
                    typeof item === "number" ? (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCurrentPage(item)}
                        className={`flex h-10 min-w-10 items-center justify-center rounded-2xl px-3 text-sm font-semibold ${
                          item === currentPage
                            ? "bg-[#1a2a6c] text-white shadow-lg shadow-[#1a2a6c]/30"
                            : "border border-transparent text-[#1f2850] hover:border-[#c6cded]"
                        }`}
                      >
                        {item}
                      </button>
                    ) : (
                      <span key={item} className="px-2 text-sm text-[#7d86b6]"></span>
                    ),
                  )}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#c7ceef] text-[#1c2452] disabled:opacity-40"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
    </PageShell>
  )
}
