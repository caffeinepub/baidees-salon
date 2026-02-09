import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import BookingForm from '../components/booking/BookingForm';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function ContactBookingPage() {
  const { ref: headerRef, isVisible: headerVisible } = useRevealOnScroll();

  const openingHours = [
    { day: 'Monday - Saturday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 6:00 PM' },
  ];

  return (
    <div className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
            Book Your <span className="text-gold">Appointment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit or get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div>
            <BookingForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* WhatsApp Booking */}
            <Card className="border-border/40 bg-card/50 backdrop-blur hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SiWhatsapp className="h-5 w-5 text-gold" />
                  Quick WhatsApp Booking
                </CardTitle>
                <CardDescription>
                  Prefer to book via WhatsApp? Send us a message!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gold text-black hover:bg-gold/90"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/1234567890?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="mr-2 h-5 w-5" />
                    Book on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {openingHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@baideessalon.com"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      info@baideessalon.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gold mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Style Street, Fashion District
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-border/40 bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gold mx-auto mb-2" />
                    <p className="text-muted-foreground">Map location placeholder</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Visit us at 123 Style Street
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
