import moment from 'moment';

function getAvailableSlots(userPreferences) {
    const slots = [];
    const { workingHours, unavailableDays } = userPreferences;
  
    // Iterate through each day of the week
    for (let day = 0; day < 7; day++) {
      if (unavailableDays.includes(moment().format('dddd'))) continue; // Skip unavailable days
  
      const startTime = moment(workingHours.start);
      const endTime = moment(workingHours.end);
  
      // Check if the working hours span multiple days (e.g., working overnight)
      if (startTime.isAfter(endTime)) {
        // If working hours span multiple days, create slots for the remaining time of the current day
        slots.push({ start: startTime.clone(), end: endTime.clone() });
        // Create slots for the next day until working hours end
        slots.push({ start: endTime.clone().add(1, 'days'), end: moment(workingHours.end).add(1, 'days') });
      } else {
        slots.push({ start: startTime.clone(), end: endTime.clone() });
      }
    }
  
    return slots;
  }
  
  // Function to find a suitable slot for an event in available slots
  function findSuitableSlot(availableSlots, eventDuration) {
    for (const slot of availableSlots) {
      const bufferEndTime = slot.end.clone().subtract(eventDuration, 'minutes').add(userPreferences.bufferTime, 'minutes');
      if (bufferEndTime.isBefore(slot.end) && bufferEndTime.isAfter(slot.start)) {
        return { start: slot.start, end: slot.start.clone().add(eventDuration, 'minutes') };
      }
    }
    return null; // No suitable slot found
  }
  