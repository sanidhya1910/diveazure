# Dive Azure - Professional Diving School Website

A modern, professional website for Dive Azure diving school located in Agatti Island, Lakshadweep. Built with Next.js, TypeScript, and Tailwind CSS with an ocean-themed dark design.

## Features

### 🌊 User Experience
- **Professional Ocean-themed Design**: Dark color palette inspired by ocean depths
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Subtle animations and transitions throughout
- **Modern UI Components**: Glass-morphism effects and backdrop blur

### 🏊‍♂️ Core Functionality
- **Course Management**: Browse and learn about PADI diving courses
- **Medical Forms**: Comprehensive medical assessment forms for divers
- **User Authentication**: Login and registration system
- **User Dashboard**: Personal dive logs, certifications, and course tracking
- **Itinerary Planning**: Detailed diving packages and schedules

### 📱 Pages
- **Homepage**: Hero section, course previews, contact information
- **Courses**: Detailed course descriptions and pricing
- **Medical Forms**: PADI-compliant medical questionnaire
- **Login/Register**: User authentication pages
- **Dashboard**: Personal diving information and progress tracking
- **Itinerary**: Diving packages and scheduled experiences

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/diveazure.git
cd diveazure
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── courses/
│   │   └── page.tsx          # Courses listing and details
│   ├── dashboard/
│   │   └── page.tsx          # User dashboard with dive logs
│   ├── itinerary/
│   │   └── page.tsx          # Diving packages and schedules
│   ├── login/
│   │   └── page.tsx          # User login page
│   ├── medical/
│   │   └── page.tsx          # Medical assessment form
│   ├── register/
│   │   └── page.tsx          # User registration page
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with navigation
│   └── page.tsx              # Homepage
└── .github/
    └── copilot-instructions.md   # GitHub Copilot instructions
```

## Design System

### Color Palette
- **Ocean Deep**: `#001122` - Primary background
- **Ocean Dark**: `#003366` - Secondary backgrounds
- **Ocean Blue**: `#006699` - Accent elements
- **Ocean Teal**: `#008080` - Primary CTA buttons
- **Ocean Cyan**: `#00CCCC` - Highlights and hover states
- **Ocean Light**: `#66E5FF` - Light accents
- **Coral**: `#FF6B6B` - Warning/error states
- **Sand**: `#F5E6D3` - Light text variations

### Typography
- **Primary Font**: Inter (clean, modern sans-serif)
- **Headings**: Bold weights with gradient text effects
- **Body Text**: Regular weight with opacity variations for hierarchy

### Components
- **Glass-morphism Cards**: Semi-transparent backgrounds with backdrop blur
- **Gradient Buttons**: Ocean-themed gradient CTAs
- **Form Elements**: Consistent styling with focus states
- **Navigation**: Fixed header with backdrop blur

## Features in Detail

### Medical Forms
- Comprehensive PADI-compliant medical questionnaire
- Form validation and error handling
- Emergency contact information collection
- Medical history documentation

### Dashboard
- Personal dive log tracking
- Certification management
- Course enrollment status
- Progress visualization

### Courses
- Detailed course descriptions
- Pricing and duration information
- Prerequisites and certification levels
- Booking integration ready

### Itinerary System
- Multi-day diving packages
- Detailed daily schedules
- Accommodation and meal inclusion
- Group size and pricing information

## Future Enhancements

- [ ] Backend integration with authentication
- [ ] Payment processing for course bookings
- [ ] Real-time availability checking
- [ ] Email notifications and confirmations
- [ ] Photo gallery and dive site information
- [ ] Weather and dive condition updates
- [ ] Mobile app companion
- [ ] Multi-language support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Dive Azure**
- Location: Agatti Island, Lakshadweep
- Email: info@diveazure.com
- Phone: +91 98765 43210

---

*Exploring the depths of Lakshadweep with professional diving education and unforgettable underwater experiences.*
