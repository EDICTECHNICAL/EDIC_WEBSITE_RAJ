import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Lightbulb, TrendingUp, Target } from "lucide-react"

const milestones = [
	{
		year: "2018",
		title: "EDIC TCET Founded",
		description:
			"Established as the premier entrepreneurship development center at TCET with a vision to foster innovation.",
		icon: Target,
	},
	{
		year: "2019",
		title: "First Innovation Lab",
		description:
			"Launched state-of-the-art innovation lab with cutting-edge equipment and resources for student projects.",
		icon: Lightbulb,
	},
	{
		year: "2020",
		title: "Digital Transformation",
		description:
			"Successfully transitioned to digital platforms during pandemic, reaching 500+ students with online programs.",
		icon: TrendingUp,
	},
	{
		year: "2021",
		title: "Industry Partnerships",
		description:
			"Established partnerships with 15+ leading companies for mentorship and internship opportunities.",
		icon: Users,
	},
	{
		year: "2022",
		title: "National Recognition",
		description:
			'Received "Best Entrepreneurship Cell" award from Maharashtra State Innovation Society.',
		icon: Award,
	},
	{
		year: "2023",
		title: "Alumni Success",
		description:
			"Our alumni founded 25+ successful startups with combined valuation exceeding ₹100 crores.",
		icon: TrendingUp,
	},
	{
		year: "2024",
		title: "Global Expansion",
		description:
			"Launched international collaboration programs with universities in Silicon Valley and Europe.",
		icon: Target,
	},
]

const stats = [
	{ label: "Students Impacted", value: "2,500+" },
	{ label: "Startups Launched", value: "50+" },
	{ label: "Industry Partners", value: "25+" },
	{ label: "Success Rate", value: "85%" },
]

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5 border-b border-primary/20">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<Badge
							variant="secondary"
							className="mb-4 bg-primary/10 text-primary border-primary/20"
						>
							About EDIC TCET
						</Badge>
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
							Empowering Tomorrow's{" "}
							<span className="text-primary">Innovators</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
							Since 2018, EDIC TCET has been at the forefront of entrepreneurship
							education, transforming innovative ideas into successful ventures and
							shaping the future of business.
						</p>
					</div>
				</div>
			</section>

			{/* Introduction Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
							<div>
								<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
									Our <span className="text-primary">Story</span>
								</h2>
								<p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
									The Entrepreneurship Development and Innovation Cell (EDIC) at
									Thakur College of Engineering and Technology was established with a
									singular mission: to bridge the gap between academic learning and
									real-world entrepreneurship.
								</p>
								<p className="mt-4 text-lg leading-8 text-muted-foreground text-pretty">
									We believe that every student has the potential to be an innovator
									and entrepreneur. Through our comprehensive programs, mentorship
									initiatives, and state-of-the-art facilities, we provide the
									ecosystem necessary for ideas to flourish into successful ventures.
								</p>
							</div>
							<div className="lg:pl-8">
								<img
									src="/EDIC-CORE-IMAGE.jpg"
									alt="EDIC Innovation Lab"
									className="w-[900px] h-[400px] rounded-lg shadow-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-24 sm:py-32 bg-primary/5 border-y border-primary/10">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Our Impact in <span className="text-primary">Numbers</span>
						</h2>
						<p className="mt-4 text-lg leading-8 text-muted-foreground">
							Measurable results that showcase our commitment to excellence
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
						{stats.map((stat, index) => (
							<Card
								key={index}
								className="border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
							>
								<CardContent className="p-6">
									<div className="text-3xl font-bold text-primary">
										{stat.value}
									</div>
									<div className="mt-2 text-sm text-muted-foreground">
										{stat.label}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Our <span className="text-primary">Journey</span>
						</h2>
						<p className="mt-4 text-lg leading-8 text-muted-foreground">
							Key milestones that shaped EDIC TCET into what it is today
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-4xl">
						<div className="space-y-8">
							{milestones.map((milestone, index) => (
								<Card
									key={index}
									className="border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300"
								>
									<CardContent className="p-8">
										<div className="flex items-start space-x-6">
											<div className="flex-shrink-0">
												<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary shadow-sm">
													<milestone.icon className="h-6 w-6 text-primary-foreground" />
												</div>
											</div>
											<div className="flex-1">
												<div className="flex items-center space-x-3 mb-2">
													<Badge
														variant="outline"
														className="border-primary/30 text-primary"
													>
														{milestone.year}
													</Badge>
													<h3 className="text-xl font-semibold text-foreground">
														{milestone.title}
													</h3>
												</div>
												<p className="text-muted-foreground text-pretty">
													{milestone.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Faculty / Team Section */}
			<section className="py-24 sm:py-32 bg-background">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
							Our <span className="text-primary">Faculty</span>
						</h2>
						<p className="mt-4 text-lg leading-8 text-muted-foreground">
							Guiding EDIC TCET towards innovation and excellence
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
						{/* Sukruti Ma'am Card */}
						

						{/* Vinit Sir Card */}
						<Card className="border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300">
							<CardContent className="p-8 text-center">
								<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-primary/10">
									<img
										src="vinit.jpg" // <-- replace with actual image path
										alt="Vinit Sir"
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-foreground">
									Dr. Vinitkumar Dongre
								</h3>
								<p className="text-primary font-medium mb-4">
									Dean R&D, Faculty Mentor
								</p>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Passionate about guiding students in business strategy and
									leadership.
								</p>
							</CardContent>
						</Card>
						<Card className="border border-primary/20 shadow-md hover:shadow-lg hover:border-primary/40 transition-all duration-300">
							<CardContent className="p-8 text-center">
								<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-primary/10">
									<img
										src="sukruti.jpg" // <-- replace with actual image path
										alt="Sukruti mam"
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-bold text-foreground">
									Dr. Sukruti Kaulgud
								</h3>
								<p className="text-primary font-medium mb-4">
									Faculty In-Charge TCET EDIC
								</p>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Dedicated to nurturing entrepreneurial skills and innovation
									among students.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}
