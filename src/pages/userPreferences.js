import React, { useState, useEffect } from 'react';
import {db, auth} from '../../config/firebaseConfig'
import {doc, getDoc} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';


const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    workingHours: {
      start: '09:00',
      end: '17:00',
    },
    meetingDuration: 30,
    bufferTime: 15,
    unavailableDays: [],
  });
  const [userId, setUserId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPreferences({ ...preferences, [name]: value });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
          const userRef = doc(db, 'users', userId);
            getDoc(userRef)
            .then((docSnap) => {
                if (docSnap.exists) {
                setPreferences(docSnap.data().preferences);
                }
            })
            .catch((error) => {
                console.error('Error fetching user preferences:', error);
            });
        } else {
          
        }
      });
    
  }, []);
  return (
    <div className="user-preferences">
      <h2>Set Your Preferences</h2>
      <form onChange={handleChange}>
        <label htmlFor="workingHoursStart">Working Hours Start:</label>
        <input
          type="time"
          id="workingHoursStart"
          name="workingHours.start"
          value={preferences.workingHours.start}
          onChange={handleChange}
          required
        />
        <label htmlFor="workingHoursEnd">Working Hours End:</label>
        <input
          type="time"
          id="workingHoursEnd"
          name="workingHours.end"
          value={preferences.workingHours.end}
          onChange={handleChange}
          required
        />
        <label htmlFor="meetingDuration">Meeting Duration (minutes):</label>
        <input
          type="number"
          id="meetingDuration"
          name="meetingDuration"
          value={preferences.meetingDuration}
          onChange={handleChange}
          min="15"
          max="120"
          required
        />
        <label htmlFor="bufferTime">Buffer Time Between Meetings (minutes):</label>
        <input
          type="number"
          id="bufferTime"
          name="bufferTime"
          value={preferences.bufferTime}
          onChange={handleChange}
          min="0"
          max="60"
          required
        />
        <label htmlFor="unavailableDays">Unavailable Days (select all that apply):</label>
        <select multiple id="unavailableDays" name="unavailableDays" value={preferences.unavailableDays} onChange={handleChange}>
          <option value="">None</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
      </form>
    </div>
  );
};

export default UserPreferences;
