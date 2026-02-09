import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { toast } from 'sonner';

interface BookAppointmentParams {
  name: string;
  phone: string;
  serviceName: string;
  date: string;
  time: string;
}

export function useBookAppointment() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: BookAppointmentParams) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      const appointmentId = await actor.bookAppointment(
        params.name,
        params.phone,
        params.serviceName,
        params.date,
        params.time
      );

      return appointmentId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
      toast.success('Appointment booked successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to book appointment');
    },
  });
}
