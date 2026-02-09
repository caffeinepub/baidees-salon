import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useBookAppointment } from '../../hooks/useBookAppointment';

interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

const services = [
  'Haircut (Men)',
  'Haircut (Women)',
  'Haircut (Kids)',
  'Hair Styling',
  'Hair Coloring',
  'Beard Styling',
  'Hair Spa',
  'Keratin Treatment',
  'Smoothening',
  'Rebonding',
  'Anti-Dandruff Treatment',
  'Hair Fall Treatment',
  'Facial',
  'Cleanup',
  'Detan',
  'Head Massage',
];

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormData>();
  const { mutate: bookAppointment, isPending, isSuccess, isError } = useBookAppointment();

  const onSubmit = (data: BookingFormData) => {
    bookAppointment(
      {
        name: data.name,
        phone: data.phone,
        serviceName: selectedService,
        date: data.date,
        time: data.time,
      },
      {
        onSuccess: () => {
          reset();
          setSelectedService('');
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <Card className="border-border/40 bg-card/50 backdrop-blur">
        <CardContent className="pt-6">
          <Alert className="border-gold bg-gold/10">
            <CheckCircle2 className="h-5 w-5 text-gold" />
            <AlertDescription className="ml-2">
              <strong>Booking Confirmed!</strong>
              <br />
              Your appointment has been successfully booked. We'll see you soon at Baidees Salon!
            </AlertDescription>
          </Alert>
          <Button
            className="w-full mt-6 bg-gold text-black hover:bg-gold/90"
            onClick={() => window.location.reload()}
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Book an Appointment</CardTitle>
        <CardDescription>Fill in your details and we'll confirm your booking</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              {...register('phone', { required: 'Phone number is required' })}
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Service */}
          <div className="space-y-2">
            <Label htmlFor="service">Select Service *</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className={!selectedService && errors.service ? 'border-destructive' : ''}>
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {!selectedService && errors.service && (
              <p className="text-sm text-destructive">Please select a service</p>
            )}
          </div>

          {/* Date */}
          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date *</Label>
            <Input
              id="date"
              type="date"
              {...register('date', { required: 'Date is required' })}
              className={errors.date ? 'border-destructive' : ''}
              min={new Date().toISOString().split('T')[0]}
            />
            {errors.date && (
              <p className="text-sm text-destructive">{errors.date.message}</p>
            )}
          </div>

          {/* Time */}
          <div className="space-y-2">
            <Label htmlFor="time">Preferred Time *</Label>
            <Input
              id="time"
              type="time"
              {...register('time', { required: 'Time is required' })}
              className={errors.time ? 'border-destructive' : ''}
            />
            {errors.time && (
              <p className="text-sm text-destructive">{errors.time.message}</p>
            )}
          </div>

          {/* Error Alert */}
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Failed to book appointment. Please try again or contact us directly.
              </AlertDescription>
            </Alert>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gold text-black hover:bg-gold/90"
            size="lg"
            disabled={isPending || !selectedService}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Booking...
              </>
            ) : (
              'Confirm Booking'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
