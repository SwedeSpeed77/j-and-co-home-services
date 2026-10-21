export const site = {
  name: "J&Co Home Solutions",
  short: "J&Co",
  owners: "Jacob & Jamee",
  phone: "+16514200670",
  phoneDisplay: "651-420-0670",
  email: "",
  area: "Isanti County and surrounding towns",
  hours: "Monday to Thursday, 8 AM to 3 PM",
  map: { lat: 45.4958, lng: -93.2468 },
  services: [
    {
      title: "Home Organizing",
      body: "Closets, garages, basements and pantries sorted and set up so they stay that way.",
    },
    {
      title: "Junk & Garbage Removal",
      body: "We load it, haul it away, and leave the space broom-clean.",
    },
    {
      title: "Cleanup & Cleaning",
      body: "Top-to-bottom cleans, from steady upkeep to a full reset before a move or a gathering.",
    },
    {
      title: "Yard Work & Odd Jobs",
      body: "Lawn care, storm debris, snow, and the outdoor jobs that keep slipping down the list.",
    },
    {
      title: "Hoarder Cleanouts",
      body: "Compassionate, judgment-free cleanouts at the pace the household needs, done thoroughly and with respect.",
    },
    {
      title: "Errands & Simple Chores",
      body: "The small tasks that eat your week. Tell us what you need and we will tell you honestly if we can help.",
    },
  ],
} as const;

export const contactHref = `tel:${site.phone}`;
export const contactLabel = `Call ${site.phoneDisplay}`;
