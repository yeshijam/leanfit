/********************************************************************
     * PHASE 1 & 5 & 9: STRUCTURED DEFAULT DATA (Profile, Workouts, Meals)
     ********************************************************************/
    const STORAGE_KEY = 'leanfit_personal_v1';

    const WEEKLY_SCHEDULE = [
      { dayIndex: 1, dayName: 'Monday', code: 'A', type: 'strength', title: 'Workout A: Chest, Shoulders, Legs & Abs', duration: '35–40 min', focus: 'Upper body pushing, quad/glute stability, anterior core & upper back posture.' },
      { dayIndex: 2, dayName: 'Tuesday', code: 'REC1', type: 'recovery', title: 'Active Recovery & Brisk Walking', duration: '20–30 min', focus: 'Brisk walking, gentle joint mobility, and optional office movement breaks.', videoUrl: 'https://www.youtube.com/results?search_query=beginner+full+body+mobility+routine' },
      { dayIndex: 3, dayName: 'Wednesday', code: 'B', type: 'strength', title: 'Workout B: Legs, Core & Full-Body Strength', duration: '30–40 min', focus: 'Unilateral leg strength, posterior chain, oblique stability & lower legs.' },
      { dayIndex: 4, dayName: 'Thursday', code: 'REC2', type: 'recovery', title: 'Active Recovery & Gentle Mobility', duration: '20–30 min', focus: '20–30 min brisk walk, thoracic/hip mobility, and posture decompression from desk work.', videoUrl: 'https://www.youtube.com/results?search_query=beginner+full+body+mobility+routine' },
      { dayIndex: 5, dayName: 'Friday', code: 'REST', type: 'rest', title: 'Full Rest Day', duration: 'No planned workout', focus: 'Protected full rest day. Muscle repair, central nervous system recovery, hydration, and normal meals.' },
      { dayIndex: 6, dayName: 'Saturday', code: 'C', type: 'strength', title: 'Workout C: Chest, Shoulders & Abs', duration: '35–45 min', focus: 'Upper body definition, dynamic core control, lower abdominals & scapular retraction.' },
      { dayIndex: 0, dayName: 'Sunday', code: 'SUN', type: 'optional', title: 'Recovery, Optional Walk, or Complete Rest', duration: 'Flexible', focus: 'Gentle strolling if desired or full relaxation before Monday.' }
    ];

    const WARMUP_ROUTINE = [
      'Marching in place (60 seconds)',
      'Arm circles forward & backward (45 seconds)',
      'Shoulder rolls & chest openers (45 seconds)',
      'Easy half-depth bodyweight squats (60 seconds)',
      'Gentle standing torso rotations (45 seconds)',
      '4–5 easy practice repetitions of your first scheduled exercise'
    ];

    const WORKOUT_EXERCISES = [
      // MONDAY - WORKOUT A (6 entries)
      {
        id: 'mon-1', workout: 'A', day: 'Monday', order: 1,
        name: 'Push-ups', sets: 3, targetType: 'reps', targetText: '6–12 reps', minVal: 6, maxVal: 12,
        instructions: 'Place hands slightly wider than shoulder-width. Keep head, hips, and heels aligned. Lower the chest under control, then push up.',
        modification: 'Easier options: Wall push-ups or knee push-ups.',
        videoUrl: 'https://www.youtube.com/results?search_query=beginner+push+up+proper+form+tutorial'
      },
      {
        id: 'mon-2', workout: 'A', day: 'Monday', order: 2,
        name: 'Pike push-ups', sets: 2, targetType: 'reps', targetText: '5–10 reps', minVal: 5, maxVal: 10,
        instructions: 'Start on hands and feet with hips raised into an inverted V. Bend the elbows and lower the head gently toward the floor, then push back up.',
        modification: 'Modification: Use a smaller range of motion or skip if uncomfortable.',
        videoUrl: 'https://www.youtube.com/results?search_query=beginner+pike+push+up+proper+form'
      },
      {
        id: 'mon-3', workout: 'A', day: 'Monday', order: 3,
        name: 'Bodyweight squats', sets: 3, targetType: 'reps', targetText: '12–15 reps', minVal: 12, maxVal: 15,
        instructions: 'Stand with feet around shoulder-width apart. Send hips back, bend knees as comfortable, keep heels down, and stand up smoothly.',
        modification: 'Use a chair lightly behind you as a depth guide if needed.',
        videoUrl: 'https://www.youtube.com/results?search_query=bodyweight+squat+proper+form+beginner'
      },
      {
        id: 'mon-4', workout: 'A', day: 'Monday', order: 4,
        name: 'Forearm plank', sets: 3, targetType: 'duration', targetText: '20–40 seconds per set', minVal: 20, maxVal: 40, defaultTimerSec: 30,
        instructions: 'Place elbows under shoulders and extend the legs. Brace the abdomen, keep the body straight, and breathe normally. Stop before the hips sag.',
        modification: 'Drop knees to the floor while keeping a straight line from shoulders to knees.',
        videoUrl: 'https://www.youtube.com/results?search_query=forearm+plank+proper+form+beginner'
      },
      {
        id: 'mon-5', workout: 'A', day: 'Monday', order: 5,
        name: 'Dead bugs', sets: 2, targetType: 'reps', targetText: '8–10 reps per side', minVal: 8, maxVal: 10,
        instructions: 'Lie on your back with arms raised and knees bent. Extend the opposite arm and leg without arching the lower back. Return and switch sides.',
        modification: 'Tap the heel closer to your body instead of extending the leg fully straight.',
        videoUrl: 'https://www.youtube.com/results?search_query=dead+bug+core+exercise+proper+form'
      },
      {
        id: 'mon-6', workout: 'A', day: 'Monday', order: 6,
        name: 'Prone Y raises', sets: 2, targetType: 'reps', targetText: '10–12 reps', minVal: 10, maxVal: 12,
        instructions: 'Lie face down with arms angled overhead in a Y shape. Lift arms slightly, gently squeeze the upper back, keep the neck relaxed, and lower slowly.',
        modification: 'Keep forehead resting on a folded towel to keep the neck completely neutral.',
        videoUrl: 'https://www.youtube.com/results?search_query=prone+Y+raise+exercise+proper+form'
      },

      // WEDNESDAY - WORKOUT B (6 entries)
      {
        id: 'wed-1', workout: 'B', day: 'Wednesday', order: 1,
        name: 'Reverse lunges', sets: 3, targetType: 'reps', targetText: '8–10 reps per leg', minVal: 8, maxVal: 10,
        instructions: 'Stand tall, step one foot backward, bend both knees as comfortable, then push through the front foot to return.',
        modification: 'Modification: Hold a wall or sturdy chair lightly for balance.',
        videoUrl: 'https://www.youtube.com/results?search_query=reverse+lunge+proper+form+beginner'
      },
      {
        id: 'wed-2', workout: 'B', day: 'Wednesday', order: 2,
        name: 'Push-ups', sets: 2, targetType: 'reps', targetText: '6–12 reps', minVal: 6, maxVal: 12,
        instructions: 'Keep the body aligned, lower under control, and avoid flaring the elbows straight out.',
        modification: 'Variations: Standard, knee, or wall push-ups.',
        videoUrl: 'https://www.youtube.com/results?search_query=beginner+push+up+proper+form+tutorial'
      },
      {
        id: 'wed-3', workout: 'B', day: 'Wednesday', order: 3,
        name: 'Glute bridges', sets: 3, targetType: 'reps', targetText: '12–15 reps', minVal: 12, maxVal: 15,
        instructions: 'Lie on your back with knees bent and feet flat. Squeeze the glutes and lift the hips until shoulders, hips, and knees form a line. Pause and lower slowly.',
        modification: 'Avoid hyperextending the lower back at the top; focus on glute squeeze.',
        videoUrl: 'https://www.youtube.com/results?search_query=glute+bridge+proper+form+beginner'
      },
      {
        id: 'wed-4', workout: 'B', day: 'Wednesday', order: 4,
        name: 'Bird dogs', sets: 2, targetType: 'reps', targetText: '8–10 reps per side', minVal: 8, maxVal: 10,
        instructions: 'Start on hands and knees. Extend one arm and the opposite leg while keeping hips steady and the back neutral. Pause and switch sides.',
        modification: 'Extend only one limb at a time if balancing both feels unsteady.',
        videoUrl: 'https://www.youtube.com/results?search_query=bird+dog+core+exercise+proper+form'
      },
      {
        id: 'wed-5', workout: 'B', day: 'Wednesday', order: 5,
        name: 'Side plank', sets: 2, targetType: 'duration', targetText: '15–30 seconds per side', minVal: 15, maxVal: 30, defaultTimerSec: 20,
        instructions: 'Place the elbow under the shoulder, lift the hips, and keep the body aligned.',
        modification: 'Easier option: Bend the knees and support yourself on the forearm and knees.',
        videoUrl: 'https://www.youtube.com/results?search_query=side+plank+beginner+proper+form'
      },
      {
        id: 'wed-6', workout: 'B', day: 'Wednesday', order: 6,
        name: 'Calf raises', sets: 2, targetType: 'reps', targetText: '15–20 reps', minVal: 15, maxVal: 20,
        instructions: 'Stand upright, hold a wall lightly for balance, rise onto the balls of the feet, pause, and lower slowly.',
        modification: 'Perform on flat floor with a 1-second pause at the top.',
        videoUrl: 'https://www.youtube.com/results?search_query=standing+calf+raise+proper+form'
      },

      // SATURDAY - WORKOUT C (6 entries)
      {
        id: 'sat-1', workout: 'C', day: 'Saturday', order: 1,
        name: 'Push-ups', sets: 3, targetType: 'reps', targetText: '6–12 reps', minVal: 6, maxVal: 12,
        instructions: 'Maintain body alignment, lower the chest under control, and push up. Use an easier variation if necessary.',
        modification: 'Wall, incline (hands on sturdy counter), or knee push-ups.',
        videoUrl: 'https://www.youtube.com/results?search_query=beginner+push+up+proper+form+tutorial'
      },
      {
        id: 'sat-2', workout: 'C', day: 'Saturday', order: 2,
        name: 'Bodyweight squats', sets: 3, targetType: 'reps', targetText: '12–15 reps', minVal: 12, maxVal: 15,
        instructions: 'Bend the knees and hips while keeping heels grounded, then stand up smoothly.',
        modification: 'Keep chest proud and gaze forward.',
        videoUrl: 'https://www.youtube.com/results?search_query=bodyweight+squat+proper+form+beginner'
      },
      {
        id: 'sat-3', workout: 'C', day: 'Saturday', order: 3,
        name: 'Mountain climbers', sets: 2, targetType: 'duration', targetText: '20–30 seconds per set', minVal: 20, maxVal: 30, defaultTimerSec: 25,
        instructions: 'Start in a high plank with hands under shoulders. Bring one knee forward, return it, and alternate while keeping hips as steady as possible.',
        modification: 'Modification: Start slowly with controlled marching steps rather than bouncing.',
        videoUrl: 'https://www.youtube.com/results?search_query=mountain+climbers+proper+form+beginner'
      },
      {
        id: 'sat-4', workout: 'C', day: 'Saturday', order: 4,
        name: 'Reverse crunches', sets: 3, targetType: 'reps', targetText: '8–12 reps', minVal: 8, maxVal: 12,
        instructions: 'Lie on your back with knees bent. Bring knees toward the chest and gently curl the pelvis off the floor. Lower slowly without swinging or pulling on the neck.',
        modification: 'Keep range small and controlled; press palms into the floor beside your hips.',
        videoUrl: 'https://www.youtube.com/results?search_query=reverse+crunch+proper+form+beginner'
      },
      {
        id: 'sat-5', workout: 'C', day: 'Saturday', order: 5,
        name: 'Prone W raises', sets: 2, targetType: 'reps', targetText: '10–12 reps', minVal: 10, maxVal: 12,
        instructions: 'Lie face down with elbows bent into a W shape. Gently lift the hands and arms, draw the shoulder blades together, keep the neck relaxed, and lower.',
        modification: 'Focus on squeezing shoulder blades down and back rather than lifting the chest high.',
        videoUrl: 'https://www.youtube.com/results?search_query=prone+W+raise+exercise+proper+form'
      },
      {
        id: 'sat-6', workout: 'C', day: 'Saturday', order: 6,
        name: 'Forearm plank', sets: 2, targetType: 'duration', targetText: '20–45 seconds per set', minVal: 20, maxVal: 45, defaultTimerSec: 30,
        instructions: 'Place elbows under shoulders, brace the abdomen, keep the body straight, breathe normally, and stop before the lower back sags.',
        modification: 'Stop the set as soon as form begins to slip.',
        videoUrl: 'https://www.youtube.com/results?search_query=forearm+plank+proper+form+beginner'
      }
    ];

    const DEFAULT_MEAL_PLAN = [
      { day: 'Monday', breakfast: 'Eggs and banana', lunch: 'Rice, vegetables, dal, egg or chicken', snack: 'Yoghurt or fruit', dinner: 'Rice, vegetables, fish or beans' },
      { day: 'Tuesday', breakfast: 'Oats with milk', lunch: 'Rice, vegetables and dal', snack: 'Fruit and a few nuts', dinner: 'Egg curry or tofu, vegetables and rice' },
      { day: 'Wednesday', breakfast: 'Yoghurt, fruit and oats', lunch: 'Rice, vegetables and chicken or beans', snack: 'Boiled egg or milk', dinner: 'Dal, vegetables and rice' },
      { day: 'Thursday', breakfast: 'Two eggs and fruit', lunch: 'Rice, vegetables, dal and fish or egg', snack: 'Fruit or plain yoghurt', dinner: 'Chicken, tofu or beans with vegetables' },
      { day: 'Friday', breakfast: 'Oats or eggs', lunch: 'Rice, vegetables and a protein source', snack: 'Fruit or yoghurt', dinner: 'Normal balanced dinner' },
      { day: 'Saturday', breakfast: 'Eggs and banana', lunch: 'Rice, vegetables, dal, chicken or fish', snack: 'Milk or yoghurt', dinner: 'Protein, vegetables and rice or potatoes' },
      { day: 'Sunday', breakfast: 'Oats or eggs', lunch: 'Home meal with vegetables and protein', snack: 'Fruit if hungry', dinner: 'Simple balanced dinner' }
    ];

    function getLocalTodayISO() {
      const now = new Date();
      const offset = now.getTimezoneOffset() * 60000;
      return new Date(now - offset).toISOString().split('T')[0];
    }

    function getDefaultMondayStart() {
      const now = new Date();
      const day = now.getDay();
      const diff = now.getDate() - day + (day === 0 ? -6 : 1);
      const mon = new Date(now.setDate(diff));
      const offset = mon.getTimezoneOffset() * 60000;
      return new Date(mon - offset).toISOString().split('T')[0];
    }

    function createInitialState() {
      return {
        profile: {
          age: 25,
          heightCm: 172,
          weightKg: 65,
          experience: 'Beginner',
          location: 'Home (No gym equipment)',
          workoutDuration: '30–45 minutes',
          programWeeks: 12,
          startDate: getDefaultMondayStart(),
          occupation: 'Office worker',
          units: 'metric',
          restTimerDefault: 60,
          soundEnabled: true,
          alcoholTrackerEnabled: true
        },
        workoutLogs: [], // { id, date, workoutCode, title, durationSec, exercisesCompleted, setsTotal, rpe, setsDetail: {} }
        activeSession: null, // { workoutCode, title, startedAt, elapsedSec, currentStepIndex, warmupDone, setsState: {}, rpe: 'Moderate' }
        mealPlan: JSON.parse(JSON.stringify(DEFAULT_MEAL_PLAN)),
        foodLogs: [], // { id, date, mealType, items, portion, status: 'completed'|'skipped', caloriesEst, proteinEst, notes }
        dailyHabits: {}, // { 'YYYY-MM-DD': { workoutOrRec: bool, balancedMeals: bool, proteinMeals: bool, walking: bool, hydration: bool, sleep78: bool, alcoholMindful: bool } }
        weeklyReflections: {}, // { 'weekKey': string }
        sleepLogs: [], // { id, date, hours, puffiness: 'None'|'Mild'|'Moderate'|'Notable', factors: [], notes }
        alcoholLogs: [], // { id, date, drank: bool, drinkType, quantity, sleepHours, nextDayEnergy, notes }
        measurements: [
          { id: 'init-1', date: getLocalTodayISO(), weightKg: 65, waistCm: null, pushups: null, plankSec: null, notes: 'Starting baseline profile weight' }
        ],
        progressPhotos: [] // { id, date, weekNum, dataUrl, notes }
      };
    }

    /********************************************************************
     * STATE MANAGEMENT & LOCALSTORAGE PERSISTENCE
     ********************************************************************/
    let state = loadState();
    let currentTab = 'dashboard';
    let globalTimerInterval = null;
    let restTimerRemaining = 0;
    let restTimerRunning = false;
    let exerciseTimerRemaining = 0;
    let exerciseTimerRunning = false;

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
          const initial = createInitialState();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
          return initial;
        }
        const parsed = JSON.parse(raw);
        return { ...createInitialState(), ...parsed };
      } catch (e) {
        console.error('Failed to read localStorage, falling back to default:', e);
        return createInitialState();
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        updateHeaderStatus();
      } catch (e) {
        alert('Browser storage limit reached (likely due to large photos). Try deleting an old photo or exporting your data.');
      }
    }

    /********************************************************************
     * DATE & 12-WEEK PROGRAM CALCULATIONS
     ********************************************************************/
    function getProgramMetrics() {
      const start = new Date(state.profile.startDate + 'T00:00:00');
      const now = new Date();
      const diffMs = now.getTime() - start.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const rawWeek = Math.floor(diffDays / 7) + 1;
      const currentWeek = Math.min(12, Math.max(1, rawWeek));
      const endDate = new Date(start.getTime() + 83 * 24 * 60 * 60 * 1000);
      const endISO = endDate.toISOString().split('T')[0];

      // Progression phase rule (Phase 8)
      let phaseTitle = '';
      let phaseGuidance = '';
      if (currentWeek <= 2) {
        phaseTitle = 'Weeks 1–2: Foundation & Movement Quality';
        phaseGuidance = 'Learn the movements. Start with 2 sets where needed and choose easier variations (such as knee or wall push-ups). Prioritize form over speed.';
      } else if (currentWeek <= 4) {
        phaseTitle = 'Weeks 3–4: Building Target Volume';
        phaseGuidance = 'Build steadily toward the prescribed sets and repetitions while keeping strict technique.';
      } else if (currentWeek <= 8) {
        phaseTitle = 'Weeks 5–8: Progressive Repetition Growth';
        phaseGuidance = 'Gradually add repetitions within the target range while maintaining full control and steady breathing.';
      } else {
        phaseTitle = 'Weeks 9–12: Tempo & Variation Mastery';
        phaseGuidance = 'If the upper end of the repetition range feels comfortable with clean form, slow the lowering (eccentric) phase to 3 seconds or use a slightly harder variation.';
      }

      const totalCompletedStrength = state.workoutLogs.filter(w => ['A', 'B', 'C'].includes(w.workoutCode)).length;
      const progressPct = Math.min(100, Math.round((totalCompletedStrength / 36) * 100));

      // Current calendar week (Mon-Sun) completed workouts
      const todayDay = now.getDay();
      const mondayOffset = todayDay === 0 ? -6 : 1 - todayDay;
      const thisMonday = new Date(now);
      thisMonday.setHours(0, 0, 0, 0);
      thisMonday.setDate(now.getDate() + mondayOffset);

      const thisWeekWorkouts = state.workoutLogs.filter(w => {
        const d = new Date(w.date + 'T00:00:00');
        return d >= thisMonday && ['A', 'B', 'C'].includes(w.workoutCode);
      });

      return {
        currentWeek,
        startDate: state.profile.startDate,
        endDate: endISO,
        phaseTitle,
        phaseGuidance,
        totalCompletedStrength,
        progressPct,
        thisWeekCount: thisWeekWorkouts.length
      };
    }

    function getTodaySchedule() {
      const dayIdx = new Date().getDay();
      return WEEKLY_SCHEDULE.find(s => s.dayIndex === dayIdx) || WEEKLY_SCHEDULE[0];
    }

    /********************************************************************
     * NAVIGATION & SHELL RENDERING
     ********************************************************************/
    const NAV_ITEMS = [
      { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { id: 'plan', label: 'My Workout Plan', icon: 'calendar-check-2' },
      { id: 'library', label: 'Exercise Library', icon: 'dumbbell' },
      { id: 'player', label: 'Workout Player', icon: 'play' },
      { id: 'nutrition', label: 'Diet & Meal Planner', icon: 'utensils' },
      { id: 'habits', label: 'Habit & Sleep Tracker', icon: 'check-square' },
      { id: 'progress', label: 'Progress Tracking', icon: 'trending-up' },
      { id: 'coach', label: 'AI Fitness Coach', icon: 'sparkles' },
      { id: 'settings', label: 'Settings & Backup', icon: 'settings' }
    ];

    function renderNavigation() {
      const desktopNav = document.getElementById('desktop-nav');
      desktopNav.innerHTML = NAV_ITEMS.map(item => {
        const active = currentTab === item.id;
        return `
          <button onclick="navigate('${item.id}')" class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition ${
            active ? 'bg-accentMuted text-accent border border-emerald-500/30' : 'text-gray-400 hover:text-white hover:bg-bgElevated'
          }">
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
            <span>${item.label}</span>
          </button>
        `;
      }).join('');

      const mobileItems = [
        NAV_ITEMS[0], // Dashboard
        NAV_ITEMS[1], // Plan
        NAV_ITEMS[3], // Player
        NAV_ITEMS[4], // Diet
        NAV_ITEMS[5], // Habits
        NAV_ITEMS[6], // Progress
        NAV_ITEMS[8]  // Settings
      ];
      const mobileNav = document.getElementById('mobile-nav');
      mobileNav.innerHTML = mobileItems.map(item => {
        const active = currentTab === item.id;
        return `
          <button onclick="navigate('${item.id}')" class="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium ${
            active ? 'text-accent' : 'text-gray-400'
          }">
            <i data-lucide="${item.icon}" class="w-4 h-4 mb-0.5"></i>
            <span>${item.label.split(' ')[0]}</span>
          </button>
        `;
      }).join('');
    }

    function updateHeaderStatus() {
      const metrics = getProgramMetrics();
      const todaySched = getTodaySchedule();
      const titleObj = NAV_ITEMS.find(n => n.id === currentTab);
      document.getElementById('header-title').textContent = titleObj ? titleObj.label : 'LeanFit';
      document.getElementById('header-date').textContent = `${todaySched.dayName} • ${getLocalTodayISO()}`;
      document.getElementById('header-week-badge').textContent = `Week ${metrics.currentWeek} of 12`;

      const banner = document.getElementById('unfinished-banner');
      if (state.activeSession && currentTab !== 'player') {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    }

    function navigate(tabId) {
      currentTab = tabId;
      renderNavigation();
      updateHeaderStatus();
      const container = document.getElementById('app-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      switch (tabId) {
        case 'dashboard': renderDashboard(container); break;
        case 'plan': renderWorkoutPlan(container); break;
        case 'library': renderExerciseLibrary(container); break;
        case 'player': renderWorkoutPlayer(container); break;
        case 'nutrition': renderNutritionPlanner(container); break;
        case 'habits': renderHabitTracker(container); break;
        case 'progress': renderProgressTracker(container); break;
        case 'coach': renderAICoach(container); break;
        case 'settings': renderSettings(container); break;
      }
      lucide.createIcons();
    }

    /********************************************************************
     * PHASE 4: PERSONAL DASHBOARD
     ********************************************************************/
    function getTodayHabits() {
      const today = getLocalTodayISO();
      if (!state.dailyHabits[today]) {
        state.dailyHabits[today] = {
          workoutOrRec: false,
          balancedMeals: false,
          proteinMeals: false,
          walking: false,
          hydration: false,
          sleep78: false,
          alcoholMindful: false
        };
      }
      return state.dailyHabits[today];
    }

    function toggleTodayHabit(key) {
      const today = getLocalTodayISO();
      const habits = getTodayHabits();
      habits[key] = !habits[key];
      state.dailyHabits[today] = habits;
      saveState();
      if (currentTab === 'dashboard') renderDashboard(document.getElementById('app-view'));
      if (currentTab === 'habits') renderHabitTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function renderDashboard(container) {
      const metrics = getProgramMetrics();
      const todaySched = getTodaySchedule();
      const todayISO = getLocalTodayISO();
      const todayHabits = getTodayHabits();
      const completedToday = state.workoutLogs.some(w => w.date === todayISO && w.workoutCode === todaySched.code);
      const latestWeight = state.measurements.filter(m => m.weightKg).slice(-1)[0];
      const latestWaist = state.measurements.filter(m => m.waistCm).slice(-1)[0];

      let actionButtonHtml = '';
      if (todaySched.type === 'strength') {
        actionButtonHtml = `
          <button onclick="startWorkoutSession('${todaySched.code}')" class="px-5 py-2.5 rounded-lg bg-accent hover:bg-accentHover text-black font-semibold text-sm flex items-center gap-2 transition shadow-lg shadow-emerald-950/50">
            <i data-lucide="play" class="w-4 h-4 fill-current"></i>
            ${completedToday ? 'Workout Completed Today (Review / Repeat)' : `Start Workout ${todaySched.code}`}
          </button>
        `;
      } else if (todaySched.type === 'recovery') {
        actionButtonHtml = `
          <div class="flex flex-wrap gap-2.5">
            <button onclick="toggleTodayHabit('workoutOrRec')" class="px-4 py-2 rounded-lg ${todayHabits.workoutOrRec ? 'bg-accent text-black font-semibold' : 'bg-bgElevated border border-borderSubtle text-white'} text-sm flex items-center gap-2 transition">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
              ${todayHabits.workoutOrRec ? 'Recovery Walk Marked Complete' : 'Mark 20–30 Min Recovery Walk Complete'}
            </button>
            <a href="${todaySched.videoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle hover:border-emerald-500/40 text-gray-200 text-sm flex items-center gap-2 transition">
              <i data-lucide="external-link" class="w-4 h-4 text-accent"></i> Watch Mobility Routine
            </a>
          </div>
        `;
      } else if (todaySched.type === 'rest') {
        actionButtonHtml = `
          <div class="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-200 text-xs leading-relaxed flex items-start gap-2.5">
            <i data-lucide="shield-check" class="w-4 h-4 text-accent shrink-0 mt-0.5"></i>
            <div>
              <strong>Protected Full Rest Day:</strong> Today is Friday. No strength workout is scheduled. Resting today counts as 100% adherence to your 12-week plan—do not double tomorrow's session to compensate for any earlier missed days.
            </div>
          </div>
        `;
      } else {
        actionButtonHtml = `
          <button onclick="toggleTodayHabit('workoutOrRec')" class="px-4 py-2 rounded-lg ${todayHabits.workoutOrRec ? 'bg-accent text-black font-semibold' : 'bg-bgElevated border border-borderSubtle text-white'} text-sm flex items-center gap-2 transition">
            <i data-lucide="sun" class="w-4 h-4"></i>
            ${todayHabits.workoutOrRec ? 'Sunday Recovery Logged' : 'Log Optional Walk or Rest'}
          </button>
        `;
      }

      container.innerHTML = `
        <!-- A. WELCOME BANNER -->
        <section class="bg-gradient-to-r from-bgCard via-bgCard to-emerald-950/30 border border-borderSubtle rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="space-y-1.5">
            <div class="inline-flex items-center gap-2 text-xs font-medium text-accent">
              <i data-lucide="flame" class="w-3.5 h-3.5"></i> 12-Week Home Bodyweight & Nutrition Plan
            </div>
            <h1 class="text-2xl md:text-3xl font-bold text-white tracking-tight">Build Your Best Self.</h1>
            <p class="text-sm text-gray-400 max-w-2xl">
              Steady consistency beats extreme transformation every time. Focus on clean reps, balanced office meals, and quality sleep.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 shrink-0">
            <div class="px-3.5 py-2 rounded-lg bg-bgMain border border-borderSubtle text-xs">
              <span class="text-gray-400 block">Current Weight</span>
              <span class="text-white font-semibold text-sm">${latestWeight ? latestWeight.weightKg + ' kg' : '65 kg'}</span>
            </div>
            <div class="px-3.5 py-2 rounded-lg bg-bgMain border border-borderSubtle text-xs">
              <span class="text-gray-400 block">Waist</span>
              <span class="text-white font-semibold text-sm">${latestWaist ? latestWaist.waistCm + ' cm' : 'Not logged yet'}</span>
            </div>
          </div>
        </section>

        <!-- B & C. TODAY'S ACTIVITY + 12-WEEK PROGRAM PROGRESS -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Today's Scheduled Activity -->
          <div class="lg:col-span-2 bg-bgCard border border-borderSubtle rounded-xl p-6 flex flex-col justify-between space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold uppercase tracking-wider text-accent">Today's Scheduled Activity (${todaySched.dayName})</span>
                <span class="text-xs text-gray-400 flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${todaySched.duration}</span>
              </div>
              <h2 class="text-xl font-bold text-white">${todaySched.title}</h2>
              <p class="text-sm text-gray-400 leading-relaxed">${todaySched.focus}</p>
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle text-xs text-gray-300 space-y-1">
                <div class="font-semibold text-accent">${metrics.phaseTitle}</div>
                <p class="text-gray-400">${metrics.phaseGuidance}</p>
              </div>
            </div>
            <div class="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-borderSubtle">
              ${actionButtonHtml}
              <button onclick="navigate('plan')" class="text-xs text-gray-400 hover:text-white underline">View Full Weekly Schedule</button>
            </div>
          </div>

          <!-- Program Progress Card -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-semibold text-white">12-Week Program Progress</h3>
                <span class="text-xs font-bold text-accent">${metrics.progressPct}%</span>
              </div>
              <div class="w-full h-2.5 bg-bgMain rounded-full overflow-hidden border border-borderSubtle">
                <div class="h-full bg-accent transition-all duration-500" style="width: ${metrics.progressPct}%"></div>
              </div>
              <div class="grid grid-cols-2 gap-2.5 pt-2 text-xs">
                <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle">
                  <span class="text-gray-400 block">Program Week</span>
                  <span class="text-white font-bold text-base">Week ${metrics.currentWeek} / 12</span>
                </div>
                <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle">
                  <span class="text-gray-400 block">This Week's Workouts</span>
                  <span class="text-white font-bold text-base">${metrics.thisWeekCount} / 3 Done</span>
                </div>
                <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle">
                  <span class="text-gray-400 block">Start Date</span>
                  <span class="text-white font-medium">${metrics.startDate}</span>
                </div>
                <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle">
                  <span class="text-gray-400 block">Est. Completion</span>
                  <span class="text-white font-medium">${metrics.endDate}</span>
                </div>
              </div>
            </div>
            <div class="text-xs text-gray-400 flex items-center justify-between pt-2 border-t border-borderSubtle">
              <span>Total Strength Workouts Logged:</span>
              <span class="text-white font-semibold">${metrics.totalCompletedStrength} / 36</span>
            </div>
          </div>
        </div>

        <!-- D & E. TODAY'S HABIT SUMMARY + QUICK ACTIONS -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Habit Checklist -->
          <div class="lg:col-span-2 bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-base font-semibold text-white">Today's Daily Habit Checklist</h3>
                <p class="text-xs text-gray-400">Small daily wins build a lean, energetic physique.</p>
              </div>
              <span class="text-xs px-2.5 py-1 rounded bg-bgElevated text-gray-300">
                ${Object.values(todayHabits).filter(Boolean).length} / ${state.profile.alcoholTrackerEnabled ? 7 : 6} checked
              </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${renderHabitCheckbox('workoutOrRec', todaySched.type === 'rest' ? 'Honored Friday Full Rest Day' : 'Completed workout or planned recovery', todayHabits.workoutOrRec)}
              ${renderHabitCheckbox('balancedMeals', 'Ate balanced meals (no skipping dinner/breakfast)', todayHabits.balancedMeals)}
              ${renderHabitCheckbox('proteinMeals', 'Included protein (eggs, dal, meat, curd, tofu)', todayHabits.proteinMeals)}
              ${renderHabitCheckbox('walking', '20–30 min walking or office movement breaks', todayHabits.walking)}
              ${renderHabitCheckbox('hydration', 'Stayed hydrated with water / unsweetened drinks', todayHabits.hydration)}
              ${renderHabitCheckbox('sleep78', 'Slept 7–8 hours last night', todayHabits.sleep78)}
              ${state.profile.alcoholTrackerEnabled ? renderHabitCheckbox('alcoholMindful', 'Alcohol-free or mindful weekend limit', todayHabits.alcoholMindful) : ''}
            </div>
          </div>

          <!-- Functional Quick Actions -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <div>
              <h3 class="text-base font-semibold text-white">Quick Actions</h3>
              <p class="text-xs text-gray-400">Direct shortcuts to your core tools.</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5">
              <button onclick="startWorkoutSession('${todaySched.type === 'strength' ? todaySched.code : 'A'}')" class="w-full p-3 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left text-sm flex items-center justify-between transition">
                <span class="flex items-center gap-2.5 text-white font-medium"><i data-lucide="play" class="w-4 h-4 text-accent"></i> Start Today's Workout</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500"></i>
              </button>
              <button onclick="navigate('nutrition')" class="w-full p-3 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left text-sm flex items-center justify-between transition">
                <span class="flex items-center gap-2.5 text-white font-medium"><i data-lucide="utensils" class="w-4 h-4 text-accent"></i> Log a Meal / Office Lunch Helper</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500"></i>
              </button>
              <button onclick="openQuickMeasurementModal()" class="w-full p-3 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left text-sm flex items-center justify-between transition">
                <span class="flex items-center gap-2.5 text-white font-medium"><i data-lucide="scale" class="w-4 h-4 text-accent"></i> Record Weight or Waist</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500"></i>
              </button>
              <button onclick="navigate('progress')" class="w-full p-3 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left text-sm flex items-center justify-between transition">
                <span class="flex items-center gap-2.5 text-white font-medium"><i data-lucide="line-chart" class="w-4 h-4 text-accent"></i> View Progress Charts</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500"></i>
              </button>
              <button onclick="navigate('habits')" class="w-full p-3 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left text-sm flex items-center justify-between transition">
                <span class="flex items-center gap-2.5 text-white font-medium"><i data-lucide="clipboard-check" class="w-4 h-4 text-accent"></i> Review Weekly Performance</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-500"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderHabitCheckbox(key, label, checked) {
      return `
        <button onclick="toggleTodayHabit('${key}')" class="p-3 rounded-lg border text-left text-xs flex items-center gap-3 transition ${
          checked ? 'bg-accentMuted border-emerald-500/40 text-white' : 'bg-bgMain border-borderSubtle text-gray-300 hover:border-gray-600'
        }">
          <div class="w-4 h-4 rounded flex items-center justify-center border ${checked ? 'bg-accent border-accent text-black' : 'border-gray-500'}">
            ${checked ? '<i data-lucide="check" class="w-3 h-3 stroke-[3]"></i>' : ''}
          </div>
          <span class="${checked ? 'line-through text-gray-300' : ''}">${label}</span>
        </button>
      `;
    }

    /********************************************************************
     * PHASE 5: MY EXACT 12-WEEK WORKOUT PLAN
     ********************************************************************/
    function renderWorkoutPlan(container) {
      const metrics = getProgramMetrics();
      const todayIdx = new Date().getDay();

      container.innerHTML = `
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-bold text-white">My 12-Week Home Workout Schedule</h2>
              <p class="text-xs text-gray-400">3 days strength training (Mon, Wed, Sat) • 2 days active recovery (Tue, Thu) • Protected Full Rest on Friday.</p>
            </div>
            <div class="flex gap-2">
              <button onclick="startWorkoutSession('A')" class="px-3.5 py-2 rounded-lg bg-accent text-black font-semibold text-xs hover:bg-accentHover">Start Workout A</button>
              <button onclick="startWorkoutSession('B')" class="px-3.5 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-white font-semibold text-xs hover:border-emerald-500/40">Start Workout B</button>
              <button onclick="startWorkoutSession('C')" class="px-3.5 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-white font-semibold text-xs hover:border-emerald-500/40">Start Workout C</button>
            </div>
          </div>

          <!-- 12-Week Progression Banner -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3 pt-2">
            ${[
              { w: 'Weeks 1–2', t: 'Learn Movements', d: 'Start with 2 sets where needed and choose easier variations.', active: metrics.currentWeek <= 2 },
              { w: 'Weeks 3–4', t: 'Build Target Volume', d: 'Build toward the prescribed sets and repetitions.', active: metrics.currentWeek >= 3 && metrics.currentWeek <= 4 },
              { w: 'Weeks 5–8', t: 'Add Repetitions', d: 'Gradually add reps while maintaining strict technique.', active: metrics.currentWeek >= 5 && metrics.currentWeek <= 8 },
              { w: 'Weeks 9–12', t: 'Tempo & Mastery', d: 'Slow the lowering phase or use a slightly harder variation.', active: metrics.currentWeek >= 9 }
            ].map(p => `
              <div class="p-3.5 rounded-lg border text-xs ${p.active ? 'bg-accentMuted border-emerald-500/50 text-white' : 'bg-bgMain border-borderSubtle text-gray-400'}">
                <div class="font-bold ${p.active ? 'text-accent' : 'text-gray-300'}">${p.w} ${p.active ? '• CURRENT' : ''}</div>
                <div class="font-medium text-white mt-0.5">${p.t}</div>
                <p class="mt-1 text-[11px] leading-relaxed">${p.d}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Weekly Schedule Grid -->
        <div class="grid grid-cols-1 md:grid-cols-7 gap-3">
          ${WEEKLY_SCHEDULE.map(s => {
            const isToday = s.dayIndex === todayIdx;
            return `
              <div class="p-4 rounded-xl border flex flex-col justify-between ${
                isToday ? 'bg-accentMuted border-emerald-500/50' : 'bg-bgCard border-borderSubtle'
              }">
                <div class="space-y-1.5">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold ${isToday ? 'text-accent' : 'text-gray-300'}">${s.dayName}</span>
                    ${isToday ? '<span class="px-1.5 py-0.5 rounded bg-accent text-black font-bold text-[10px]">TODAY</span>' : ''}
                  </div>
                  <div class="text-sm font-semibold text-white leading-snug">${s.title}</div>
                  <div class="text-[11px] text-gray-400">${s.duration}</div>
                </div>
                <div class="mt-4 pt-2 border-t border-borderSubtle/60 text-[11px] text-gray-400">
                  ${s.type === 'strength' ? `<button onclick="startWorkoutSession('${s.code}')" class="text-accent font-semibold hover:underline flex items-center gap-1"><i data-lucide="play" class="w-3 h-3"></i> Launch ${s.code}</button>` : s.type === 'rest' ? '<span class="text-emerald-300">Protected Full Rest</span>' : 'Recovery & Mobility'}
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Warm-up & Rest Rules -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <i data-lucide="Flame" class="w-4 h-4 text-accent"></i> Mandatory 5-Minute Warm-Up (Before Strength Sessions)
            </h3>
            <ul class="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
              ${WARMUP_ROUTINE.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <i data-lucide="timer" class="w-4 h-4 text-accent"></i> Rest Periods & Balance Support Rules
            </h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              • <strong>Rest 45–90 seconds</strong> between sets, or longer until your breathing settles comfortably.<br/>
              • <strong>Balance Support:</strong> Use a wall, sturdy counter, or chair for balance during lunges or calf raises whenever helpful.<br/>
              • <strong>Missed a Workout?</strong> Never double up the next session. Continue calmly with your normal weekly schedule.
            </p>
          </div>
        </div>

        <!-- Detailed Workout Breakdowns (A, B, C) -->
        ${['A', 'B', 'C'].map(code => {
          const sched = WEEKLY_SCHEDULE.find(s => s.code === code);
          const list = WORKOUT_EXERCISES.filter(e => e.workout === code);
          return `
            <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-borderSubtle pb-4">
                <div>
                  <span class="text-xs font-bold uppercase text-accent">${sched.dayName} • ${sched.duration}</span>
                  <h3 class="text-lg font-bold text-white">${sched.title}</h3>
                </div>
                <button onclick="startWorkoutSession('${code}')" class="px-4 py-2 rounded-lg bg-accent text-black font-semibold text-xs flex items-center gap-1.5 self-start sm:self-auto">
                  <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i> Start Guided Workout ${code}
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${list.map(ex => renderExerciseCardHTML(ex)).join('')}
              </div>
            </div>
          `;
        }).join('')}
      `;
    }

    /********************************************************************
     * PHASE 6: REUSABLE EXERCISE CARD & EXERCISE VIDEO LIBRARY
     ********************************************************************/
    function renderExerciseCardHTML(ex) {
      const todayISO = getLocalTodayISO();
      const quickKey = `${todayISO}_${ex.id}`;
      const isMarked = state.dailyHabits[quickKey] === true;

      return `
        <div class="bg-bgMain border border-borderSubtle rounded-xl p-4 flex flex-col justify-between space-y-3 hover:border-gray-700 transition">
          <div class="space-y-2">
            <div class="flex items-start justify-between gap-2">
              <div>
                <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-bgElevated text-accent">
                  Workout ${ex.workout} • #${ex.order}
                </span>
                <h4 class="text-base font-bold text-white mt-1.5">${ex.name}</h4>
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded bg-accentMuted text-accent border border-emerald-500/30 shrink-0">
                ${ex.sets} sets × ${ex.targetText}
              </span>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">${ex.instructions}</p>
            <div class="p-2.5 rounded-lg bg-bgCard border border-borderSubtle text-[11px] text-gray-400">
              <strong class="text-gray-200">Beginner Modification:</strong> ${ex.modification}
            </div>
          </div>

          <div class="pt-3 border-t border-borderSubtle space-y-2">
            <div class="flex items-center justify-between gap-2">
              <a href="${ex.videoUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2 px-3 rounded-lg bg-bgElevated hover:bg-emerald-950/40 border border-borderSubtle hover:border-emerald-500/40 text-xs font-medium text-white flex items-center justify-center gap-1.5 transition" title="Opens verified YouTube tutorial search in a new tab without losing your workout progress">
                <i data-lucide="video" class="w-3.5 h-3.5 text-accent"></i> Watch Demonstration
              </a>
              <button onclick="toggleQuickExerciseMark('${ex.id}')" class="py-2 px-3 rounded-lg border text-xs font-medium flex items-center gap-1 transition ${
                isMarked ? 'bg-accent text-black border-accent font-semibold' : 'bg-bgElevated border-borderSubtle text-gray-300 hover:text-white'
              }">
                <i data-lucide="${isMarked ? 'check-circle-2' : 'circle'}" class="w-3.5 h-3.5"></i>
                ${isMarked ? 'Done' : 'Mark'}
              </button>
            </div>
            <div class="text-[10px] text-gray-500 flex items-center justify-between">
              <span>YouTube Form Search Link</span>
              <button onclick="openStandaloneTimerModal('${ex.name}', ${ex.defaultTimerSec || 60})" class="text-accent hover:underline flex items-center gap-1">
                <i data-lucide="timer" class="w-3 h-3"></i> Open Rest / Set Timer
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function toggleQuickExerciseMark(exId) {
      const todayISO = getLocalTodayISO();
      const quickKey = `${todayISO}_${exId}`;
      state.dailyHabits[quickKey] = !state.dailyHabits[quickKey];
      saveState();
      navigate(currentTab);
    }

    let libraryFilter = 'ALL';
    function setLibraryFilter(filter) {
      libraryFilter = filter;
      renderExerciseLibrary(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function renderExerciseLibrary(container) {
      const filtered = libraryFilter === 'ALL'
        ? WORKOUT_EXERCISES
        : WORKOUT_EXERCISES.filter(e => e.workout === libraryFilter);

      container.innerHTML = `
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-bold text-white">Exercise Video Library (All 18 Scheduled Entries)</h2>
              <p class="text-xs text-gray-400">
                Every exercise includes sets, reps/duration, step-by-step form instructions, beginner modifications, and a direct YouTube demonstration search link that opens in a new tab so your session state stays untouched.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              ${['ALL', 'A', 'B', 'C'].map(f => `
                <button onclick="setLibraryFilter('${f}')" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                  libraryFilter === f ? 'bg-accent text-black border-accent' : 'bg-bgElevated text-gray-300 border-borderSubtle hover:text-white'
                }">
                  ${f === 'ALL' ? 'All 18 Entries' : `Workout ${f} (6)`}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${filtered.map(ex => renderExerciseCardHTML(ex)).join('')}
        </div>

        <!-- Active Recovery Mobility Card -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="text-xs font-semibold text-accent uppercase">Tuesday & Thursday Active Recovery</span>
            <h3 class="text-base font-bold text-white">Beginner Full-Body Mobility Routine + 20–30 Min Walk</h3>
            <p class="text-xs text-gray-400">Gentle joint mobility and posture relief for office days.</p>
          </div>
          <a href="https://www.youtube.com/results?search_query=beginner+full+body+mobility+routine" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-lg bg-bgElevated border border-borderSubtle hover:border-emerald-500/40 text-xs font-semibold text-white flex items-center gap-2 shrink-0">
            <i data-lucide="external-link" class="w-4 h-4 text-accent"></i> Open Mobility Demonstrations
          </a>
        </div>
      `;
    }

    /********************************************************************
     * PHASE 7 & 8: GUIDED WORKOUT PLAYER, TIMERS & 12-WEEK PROGRESSION
     ********************************************************************/
    function startWorkoutSession(workoutCode) {
      const code = ['A', 'B', 'C'].includes(workoutCode) ? workoutCode : 'A';
      if (state.activeSession && state.activeSession.workoutCode !== code) {
        if (!confirm(`You have an unfinished Workout ${state.activeSession.workoutCode} session. Replace it with Workout ${code}?`)) {
          navigate('player');
          return;
        }
      }
      if (!state.activeSession || state.activeSession.workoutCode !== code) {
        const sched = WEEKLY_SCHEDULE.find(s => s.code === code);
        const exercises = WORKOUT_EXERCISES.filter(e => e.workout === code);
        const setsState = {};
        exercises.forEach(ex => {
          setsState[ex.id] = Array.from({ length: ex.sets }, () => ({
            done: false,
            value: ex.maxVal,
            skipped: false
          }));
        });
        state.activeSession = {
          workoutCode: code,
          title: sched.title,
          startedAt: new Date().toISOString(),
          elapsedSec: 0,
          paused: false,
          currentStepIndex: -1, // -1 = 5-minute warm-up screen
          warmupDone: false,
          setsState,
          rpe: 'Good Form / Solid Effort'
        };
        saveState();
      }
      ensurePlayerClock();
      navigate('player');
    }

    function resumeWorkout() {
      ensurePlayerClock();
      navigate('player');
    }

    function ensurePlayerClock() {
      if (globalTimerInterval) clearInterval(globalTimerInterval);
      globalTimerInterval = setInterval(() => {
        if (state.activeSession && !state.activeSession.paused) {
          state.activeSession.elapsedSec += 1;
          const el = document.getElementById('player-elapsed');
          if (el) el.textContent = formatSeconds(state.activeSession.elapsedSec);
        }
        if (restTimerRunning && restTimerRemaining > 0) {
          restTimerRemaining -= 1;
          const rel = document.getElementById('rest-timer-display');
          if (rel) rel.textContent = formatSeconds(restTimerRemaining);
          if (restTimerRemaining === 0) {
            restTimerRunning = false;
            playBeep();
          }
        }
        if (exerciseTimerRunning && exerciseTimerRemaining > 0) {
          exerciseTimerRemaining -= 1;
          const eel = document.getElementById('ex-timer-display');
          if (eel) eel.textContent = formatSeconds(exerciseTimerRemaining);
          if (exerciseTimerRemaining === 0) {
            exerciseTimerRunning = false;
            playBeep();
          }
        }
      }, 1000);
    }

    function playBeep() {
      if (!state.profile.soundEnabled) return;
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(660, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } catch (e) {}
    }

    function formatSeconds(sec) {
      const m = Math.floor(sec / 60).toString().padStart(2, '0');
      const s = (sec % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    }

    function renderWorkoutPlayer(container) {
      if (!state.activeSession) {
        container.innerHTML = `
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-8 text-center space-y-5 max-w-2xl mx-auto">
            <div class="w-12 h-12 rounded-full bg-accentMuted text-accent flex items-center justify-center mx-auto">
              <i data-lucide="dumbbell" class="w-6 h-6"></i>
            </div>
            <h2 class="text-xl font-bold text-white">Guided Step-by-Step Workout Player</h2>
            <p class="text-sm text-gray-400">
              Select a workout below to launch the guided training player with the 5-minute warm-up, set-by-set tracking, rest timers, and automatic session persistence.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button onclick="startWorkoutSession('A')" class="p-4 rounded-xl bg-bgMain hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left space-y-1 transition">
                <span class="text-xs font-bold text-accent">MONDAY</span>
                <div class="font-bold text-white text-sm">Workout A</div>
                <p class="text-[11px] text-gray-400">Chest, shoulders, legs & abs</p>
              </button>
              <button onclick="startWorkoutSession('B')" class="p-4 rounded-xl bg-bgMain hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left space-y-1 transition">
                <span class="text-xs font-bold text-accent">WEDNESDAY</span>
                <div class="font-bold text-white text-sm">Workout B</div>
                <p class="text-[11px] text-gray-400">Legs, core & full-body</p>
              </button>
              <button onclick="startWorkoutSession('C')" class="p-4 rounded-xl bg-bgMain hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-left space-y-1 transition">
                <span class="text-xs font-bold text-accent">SATURDAY</span>
                <div class="font-bold text-white text-sm">Workout C</div>
                <p class="text-[11px] text-gray-400">Chest, shoulders & abs</p>
              </button>
            </div>
          </div>
        `;
        return;
      }

      ensurePlayerClock();
      const session = state.activeSession;
      const exercises = WORKOUT_EXERCISES.filter(e => e.workout === session.workoutCode);
      const totalSteps = exercises.length;
      const stepIdx = session.currentStepIndex;

      // Step -1: 5-Minute Warm-Up Screen
      if (stepIdx === -1) {
        container.innerHTML = `
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 max-w-3xl mx-auto space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderSubtle pb-4">
              <div>
                <span class="text-xs font-bold text-accent uppercase">Step 0 of ${totalSteps} • Mandatory Warm-Up</span>
                <h2 class="text-xl font-bold text-white">${session.title}</h2>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded bg-bgMain border border-borderSubtle text-xs font-mono text-gray-300">
                  Elapsed: <strong id="player-elapsed">${formatSeconds(session.elapsedSec)}</strong>
                </span>
                <button onclick="togglePauseSession()" class="px-3 py-1 rounded bg-bgElevated border border-borderSubtle text-xs text-white">
                  ${session.paused ? 'Resume' : 'Pause'}
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-base font-semibold text-white">Complete ~5 Minutes of Warm-Up Before Starting</h3>
              <p class="text-xs text-gray-400">Prepare your joints, shoulders, core, and lower body for clean, pain-free repetitions.</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${WARMUP_ROUTINE.map(w => `
                  <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle text-xs text-gray-200 flex items-center gap-2.5">
                    <i data-lucide="check-circle" class="w-4 h-4 text-accent shrink-0"></i>
                    <span>${w}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 5-Minute Warm-up Countdown Timer -->
            <div class="p-4 rounded-xl bg-bgMain border border-borderSubtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div class="text-xs font-semibold text-gray-300">5-Minute Warm-Up Timer</div>
                <div id="ex-timer-display" class="text-2xl font-bold font-mono text-accent">${formatSeconds(exerciseTimerRemaining || 300)}</div>
              </div>
              <div class="flex gap-2">
                <button onclick="startExTimer(300)" class="px-3.5 py-2 rounded-lg bg-accent text-black font-semibold text-xs">Start 5:00</button>
                <button onclick="pauseExTimer()" class="px-3.5 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-white text-xs">Pause</button>
                <button onclick="resetExTimer(300)" class="px-3.5 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-gray-300 text-xs">Reset</button>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-borderSubtle">
              <button onclick="abandonSession()" class="px-4 py-2 rounded-lg bg-red-950/30 border border-red-500/30 text-red-300 text-xs font-medium">
                Discard Unfinished Session
              </button>
              <button onclick="advanceWorkoutStep(0)" class="px-5 py-2.5 rounded-lg bg-accent hover:bg-accentHover text-black font-semibold text-sm flex items-center gap-2">
                Warm-Up Done — Start Exercise 1 <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        `;
        return;
      }

      // Summary / Finish Screen
      if (stepIdx >= totalSteps) {
        const totalSetsPossible = Object.values(session.setsState).reduce((acc, arr) => acc + arr.length, 0);
        const totalSetsDone = Object.values(session.setsState).reduce((acc, arr) => acc + arr.filter(s => s.done).length, 0);

        container.innerHTML = `
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 max-w-2xl mx-auto space-y-6">
            <div class="text-center space-y-2">
              <div class="w-12 h-12 rounded-full bg-accentMuted text-accent flex items-center justify-center mx-auto">
                <i data-lucide="award" class="w-6 h-6"></i>
              </div>
              <h2 class="text-2xl font-bold text-white">Review & Save ${session.title}</h2>
              <p class="text-xs text-gray-400">Great consistency! Review your completed sets and perceived effort before saving to your log.</p>
            </div>

            <div class="grid grid-cols-3 gap-3 text-center">
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs text-gray-400 block">Duration</span>
                <span class="text-lg font-bold text-white">${formatSeconds(session.elapsedSec)}</span>
              </div>
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs text-gray-400 block">Sets Completed</span>
                <span class="text-lg font-bold text-accent">${totalSetsDone} / ${totalSetsPossible}</span>
              </div>
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs text-gray-400 block">Date</span>
                <span class="text-sm font-bold text-white">${getLocalTodayISO()}</span>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-semibold text-gray-300 block">Perceived Difficulty & Technique Check (Phase 8 Progression):</label>
              <select onchange="state.activeSession.rpe = this.value; saveState();" class="w-full p-2.5 rounded-lg bg-bgMain border border-borderSubtle text-sm text-white">
                <option value="Comfortable — Ready to add 1–2 reps next time" ${session.rpe.includes('Comfortable') ? 'selected' : ''}>Comfortable — Upper rep range felt clean; ready to add 1–2 reps or slow tempo next time</option>
                <option value="Good Form / Solid Effort" ${session.rpe.includes('Good Form') ? 'selected' : ''}>Good Form / Solid Effort — Keep this exact level next session</option>
                <option value="Challenging — Keep current variation" ${session.rpe.includes('Challenging') ? 'selected' : ''}>Challenging — Keep current variation and focus on form</option>
              </select>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-borderSubtle">
              <button onclick="advanceWorkoutStep(${totalSteps - 1})" class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-xs text-gray-300">
                ← Back to Exercises
              </button>
              <button onclick="completeAndSaveWorkout()" class="px-6 py-2.5 rounded-lg bg-accent hover:bg-accentHover text-black font-bold text-sm flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i> Save Completed Workout
              </button>
            </div>
          </div>
        `;
        return;
      }

      // Active Exercise Step
      const ex = exercises[stepIdx];
      const exSets = session.setsState[ex.id] || [];
      const metrics = getProgramMetrics();

      container.innerHTML = `
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 max-w-3xl mx-auto space-y-6">
          <!-- Top Bar -->
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-borderSubtle pb-4">
            <div>
              <span class="text-xs font-bold text-accent uppercase">Exercise ${stepIdx + 1} of ${totalSteps} • Workout ${session.workoutCode}</span>
              <h2 class="text-2xl font-bold text-white">${ex.name}</h2>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded bg-bgMain border border-borderSubtle text-xs font-mono text-gray-300">
                Session: <strong id="player-elapsed">${formatSeconds(session.elapsedSec)}</strong>
              </span>
              <button onclick="togglePauseSession()" class="px-3 py-1 rounded bg-bgElevated border border-borderSubtle text-xs text-white">
                ${session.paused ? 'Resume' : 'Pause'}
              </button>
              <button onclick="abandonSession()" class="px-3 py-1 rounded bg-red-950/30 border border-red-500/30 text-red-300 text-xs">
                End Early
              </button>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-2 bg-bgMain rounded-full overflow-hidden">
            <div class="h-full bg-accent transition-all duration-300" style="width: ${Math.round(((stepIdx + 1) / totalSteps) * 100)}%"></div>
          </div>

          <!-- Instructions & Video Link -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2 p-4 rounded-xl bg-bgMain border border-borderSubtle space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold text-accent">Target: ${ex.sets} Sets × ${ex.targetText}</span>
                <span class="text-[11px] text-gray-400">Week ${metrics.currentWeek} Guidance</span>
              </div>
              <p class="text-sm text-gray-200 leading-relaxed">${ex.instructions}</p>
              <p class="text-xs text-gray-400 pt-1"><strong>Modification:</strong> ${ex.modification}</p>
            </div>
            <div class="p-4 rounded-xl bg-bgMain border border-borderSubtle flex flex-col justify-between space-y-3">
              <div class="text-xs text-gray-300 font-medium">Need a quick form check?</div>
              <a href="${ex.videoUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-lg bg-accentMuted border border-emerald-500/40 text-accent font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald-500/20 transition">
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Watch Demonstration
              </a>
              <p class="text-[10px] text-gray-500">Opens in a new tab. Your sets and timers stay saved right here.</p>
            </div>
          </div>

          <!-- Set-by-Set Completion Controls -->
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-white">Log Your Sets (${ex.targetType === 'reps' ? 'Repetitions' : 'Seconds Held'})</h3>
              <button onclick="skipCurrentExercise('${ex.id}')" class="text-xs text-gray-400 hover:text-amber-300 underline">Skip Exercise (If Uncomfortable)</button>
            </div>
            <div class="space-y-2">
              ${exSets.map((setObj, idx) => `
                <div class="p-3.5 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${
                  setObj.done ? 'bg-accentMuted border-emerald-500/40' : 'bg-bgMain border-borderSubtle'
                }">
                  <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-full bg-bgElevated text-xs font-bold flex items-center justify-center text-white">
                      #${idx + 1}
                    </span>
                    <div>
                      <span class="text-sm font-medium text-white">Set ${idx + 1}</span>
                      <span class="text-xs text-gray-400 block">Target: ${ex.targetText}</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1.5">
                      <label class="text-xs text-gray-400">${ex.targetType === 'reps' ? 'Reps:' : 'Sec:'}</label>
                      <input type="number" min="0" max="300" value="${setObj.value}"
                        onchange="updateSetValue('${ex.id}', ${idx}, this.value)"
                        class="w-16 px-2 py-1 rounded bg-bgCard border border-borderSubtle text-white text-xs text-center font-semibold" />
                    </div>
                    <button onclick="toggleSetDone('${ex.id}', ${idx})" class="px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                      setObj.done ? 'bg-accent text-black' : 'bg-bgElevated border border-borderSubtle text-white hover:border-emerald-500/40'
                    }">
                      <i data-lucide="${setObj.done ? 'check-circle-2' : 'check'}" class="w-3.5 h-3.5"></i>
                      ${setObj.done ? 'Completed' : 'Mark Set Done'}
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Dual Timers: Rest Timer (45-90s) & Exercise Duration Timer -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-bgMain border border-borderSubtle flex items-center justify-between">
              <div>
                <span class="text-[11px] text-gray-400 uppercase font-semibold block">Rest Timer (45–90s)</span>
                <span id="rest-timer-display" class="text-2xl font-mono font-bold text-accent">${formatSeconds(restTimerRemaining || state.profile.restTimerDefault)}</span>
              </div>
              <div class="flex gap-1.5">
                <button onclick="startRestTimer(60)" class="px-2.5 py-1.5 rounded bg-accent text-black font-semibold text-xs">60s</button>
                <button onclick="startRestTimer(90)" class="px-2.5 py-1.5 rounded bg-bgElevated border border-borderSubtle text-white text-xs">90s</button>
                <button onclick="stopRestTimer()" class="px-2.5 py-1.5 rounded bg-bgElevated border border-borderSubtle text-gray-400 text-xs">Reset</button>
              </div>
            </div>

            ${ex.targetType === 'duration' ? `
              <div class="p-4 rounded-xl bg-bgMain border border-borderSubtle flex items-center justify-between">
                <div>
                  <span class="text-[11px] text-gray-400 uppercase font-semibold block">Exercise Hold Timer</span>
                  <span id="ex-timer-display" class="text-2xl font-mono font-bold text-amber-400">${formatSeconds(exerciseTimerRemaining || ex.defaultTimerSec || 30)}</span>
                </div>
                <div class="flex gap-1.5">
                  <button onclick="startExTimer(${ex.defaultTimerSec || 30})" class="px-3 py-1.5 rounded bg-amber-500 text-black font-semibold text-xs">Start ${ex.defaultTimerSec || 30}s</button>
                  <button onclick="pauseExTimer()" class="px-2.5 py-1.5 rounded bg-bgElevated border border-borderSubtle text-white text-xs">Pause</button>
                  <button onclick="resetExTimer(${ex.defaultTimerSec || 30})" class="px-2.5 py-1.5 rounded bg-bgElevated border border-borderSubtle text-gray-400 text-xs">Reset</button>
                </div>
              </div>
            ` : `
              <div class="p-4 rounded-xl bg-bgMain border border-borderSubtle flex items-center justify-between text-xs text-gray-400">
                <div>
                  <strong class="text-gray-200 block">Progression Tip</strong>
                  If you hit ${ex.maxVal} clean reps across all sets, slow the lowering phase or add 1–2 reps next week.
                </div>
              </div>
            `}
          </div>

          <!-- Bottom Step Navigation -->
          <div class="flex items-center justify-between pt-4 border-t border-borderSubtle">
            <button onclick="advanceWorkoutStep(${stepIdx - 1})" class="px-4 py-2.5 rounded-lg bg-bgElevated border border-borderSubtle text-xs font-semibold text-gray-200 flex items-center gap-1.5">
              <i data-lucide="arrow-left" class="w-4 h-4"></i> Previous
            </button>
            <button onclick="advanceWorkoutStep(${stepIdx + 1})" class="px-5 py-2.5 rounded-lg bg-accent hover:bg-accentHover text-black font-semibold text-sm flex items-center gap-1.5">
              ${stepIdx + 1 === totalSteps ? 'Review & Finish Workout' : 'Next Exercise'} <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;
    }

    function advanceWorkoutStep(nextIdx) {
      if (!state.activeSession) return;
      if (nextIdx >= 0) state.activeSession.warmupDone = true;
      state.activeSession.currentStepIndex = nextIdx;
      saveState();
      renderWorkoutPlayer(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function updateSetValue(exId, setIdx, val) {
      if (!state.activeSession) return;
      state.activeSession.setsState[exId][setIdx].value = Number(val) || 0;
      saveState();
    }

    function toggleSetDone(exId, setIdx) {
      if (!state.activeSession) return;
      const item = state.activeSession.setsState[exId][setIdx];
      item.done = !item.done;
      if (item.done) startRestTimer(state.profile.restTimerDefault || 60);
      saveState();
      renderWorkoutPlayer(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function skipCurrentExercise(exId) {
      if (!state.activeSession) return;
      state.activeSession.setsState[exId].forEach(s => { s.skipped = true; });
      advanceWorkoutStep(state.activeSession.currentStepIndex + 1);
    }

    function togglePauseSession() {
      if (!state.activeSession) return;
      state.activeSession.paused = !state.activeSession.paused;
      saveState();
      renderWorkoutPlayer(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function abandonSession() {
      if (!confirm('End and discard this unfinished session? (Abandoned sessions are not marked as completed workouts.)')) return;
      state.activeSession = null;
      saveState();
      navigate('dashboard');
    }

    function completeAndSaveWorkout() {
      if (!state.activeSession) return;
      const s = state.activeSession;
      const todayISO = getLocalTodayISO();

      // Prevent duplicate same-day workout code logs
      state.workoutLogs = state.workoutLogs.filter(w => !(w.date === todayISO && w.workoutCode === s.workoutCode));

      const totalSetsDone = Object.values(s.setsState).reduce((acc, arr) => acc + arr.filter(x => x.done).length, 0);
      state.workoutLogs.push({
        id: 'wlog-' + Date.now(),
        date: todayISO,
        workoutCode: s.workoutCode,
        title: s.title,
        durationSec: s.elapsedSec,
        setsCompleted: totalSetsDone,
        rpe: s.rpe,
        setsDetail: s.setsState
      });

      // Automatically check today's workout habit
      const todayHabits = getTodayHabits();
      todayHabits.workoutOrRec = true;
      state.dailyHabits[todayISO] = todayHabits;

      state.activeSession = null;
      saveState();
      navigate('dashboard');
    }

    function startRestTimer(sec) {
      restTimerRemaining = sec;
      restTimerRunning = true;
      const el = document.getElementById('rest-timer-display');
      if (el) el.textContent = formatSeconds(restTimerRemaining);
    }
    function stopRestTimer() {
      restTimerRunning = false;
      restTimerRemaining = state.profile.restTimerDefault || 60;
      const el = document.getElementById('rest-timer-display');
      if (el) el.textContent = formatSeconds(restTimerRemaining);
    }
    function startExTimer(sec) {
      if (!exerciseTimerRemaining) exerciseTimerRemaining = sec;
      exerciseTimerRunning = true;
    }
    function pauseExTimer() { exerciseTimerRunning = false; }
    function resetExTimer(sec) {
      exerciseTimerRunning = false;
      exerciseTimerRemaining = sec;
      const el = document.getElementById('ex-timer-display');
      if (el) el.textContent = formatSeconds(sec);
    }

    /********************************************************************
     * PHASE 9: PERSONAL NUTRITION PLANNER & OFFICE LUNCH HELPER
     ********************************************************************/
    function renderNutritionPlanner(container) {
      const todayISO = getLocalTodayISO();
      const todayLogs = state.foodLogs.filter(f => f.date === todayISO);

      container.innerHTML = `
        <!-- Plate Guide & Office Lunch Helper Banner -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 class="text-xl font-bold text-white">Balanced Plate Guide & Nutrition Approach</h2>
                <p class="text-xs text-gray-400">Keep rice in your diet! Aim for steady energy, affordable protein, and consistent meal timing.</p>
              </div>
              <button onclick="openOfficeLunchHelperModal()" class="px-4 py-2.5 rounded-lg bg-accent hover:bg-accentHover text-black font-semibold text-xs flex items-center gap-2 shrink-0 shadow-lg shadow-emerald-950/50">
                <i data-lucide="helping-hand" class="w-4 h-4"></i> Help Me Choose Office Lunch
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs font-bold text-accent">1/2 Plate Vegetables</span>
                <p class="text-xs text-gray-400 mt-1">Cooked sabzi, greens, salad, beans, or mixed seasonal vegetables for fiber and fullness.</p>
              </div>
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs font-bold text-accent">1/4 Plate Protein</span>
                <p class="text-xs text-gray-400 mt-1">Eggs, thick dal, beans/chana, chicken, fish, paneer, tofu, milk, or plain yoghurt.</p>
              </div>
              <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle">
                <span class="text-xs font-bold text-accent">1/4 Plate Rice / Starch</span>
                <p class="text-xs text-gray-400 mt-1">A sensible serving of rice, oats, or potatoes to fuel your workouts and brain at work.</p>
              </div>
            </div>
            <p class="text-[11px] text-gray-500">
              Note: Nutritional figures are practical estimates, not clinical prescriptions. Never skip dinner to compensate for a heavy office lunch or weekend drinks.
            </p>
          </div>

          <!-- Log Today's Meal Form -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-3">
            <h3 class="text-base font-bold text-white">Log Today's Meal (${todayISO})</h3>
            <div class="space-y-2.5 text-xs">
              <div>
                <label class="text-gray-400 block mb-1">Meal Type</label>
                <select id="meal-type" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white">
                  <option>Breakfast</option>
                  <option>Office Lunch</option>
                  <option>Afternoon Snack</option>
                  <option>Dinner</option>
                </select>
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Food Items & Portion</label>
                <input id="meal-items" type="text" placeholder="e.g., Rice, dal, 2 boiled eggs & greens" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="text-gray-400 block mb-1">Est. Protein (g, opt)</label>
                  <input id="meal-protein" type="number" placeholder="~25" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
                </div>
                <div>
                  <label class="text-gray-400 block mb-1">Status</label>
                  <select id="meal-status" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white">
                    <option value="completed">Completed</option>
                    <option value="skipped">Skipped (No Guilt)</option>
                  </select>
                </div>
              </div>
              <button onclick="addFoodLog()" class="w-full py-2.5 rounded-lg bg-accent text-black font-semibold text-xs mt-1">
                Save Meal Entry
              </button>
            </div>
          </div>
        </div>

        <!-- Today's Food Log List -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-3">
          <h3 class="text-base font-bold text-white">Today's Logged Meals (${todayLogs.length})</h3>
          ${todayLogs.length === 0 ? `<p class="text-xs text-gray-400">No meals logged for today yet. Use the form above or click "Log" from any row in your 7-day plan below.</p>` : `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${todayLogs.map(log => `
                <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle flex items-center justify-between text-xs">
                  <div>
                    <span class="font-bold ${log.status === 'skipped' ? 'text-amber-400' : 'text-accent'} uppercase">${log.mealType} • ${log.status}</span>
                    <div class="text-white font-medium mt-0.5">${log.items}</div>
                    ${log.proteinEst ? `<span class="text-gray-400">Est. ~${log.proteinEst}g protein (approximate)</span>` : ''}
                  </div>
                  <button onclick="deleteFoodLog('${log.id}')" class="text-gray-500 hover:text-red-400"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Editable 7-Day Meal Plan Table -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-base font-bold text-white">My Editable 7-Day Meal Plan</h3>
              <p class="text-xs text-gray-400">Click any day to customize ingredients or log a meal directly to today's record.</p>
            </div>
            <button onclick="resetMealPlanToDefault()" class="text-xs text-gray-400 hover:text-white underline">Restore Default 7-Day Plan</button>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="border-b border-borderSubtle text-gray-400">
                  <th class="py-3 px-3">Day</th>
                  <th class="py-3 px-3">Breakfast</th>
                  <th class="py-3 px-3">Office Lunch</th>
                  <th class="py-3 px-3">Afternoon Snack</th>
                  <th class="py-3 px-3">Dinner</th>
                  <th class="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-borderSubtle">
                ${state.mealPlan.map((row, idx) => `
                  <tr class="hover:bg-bgMain/60">
                    <td class="py-3 px-3 font-bold text-white">${row.day}</td>
                    <td class="py-3 px-3 text-gray-300">${row.breakfast}</td>
                    <td class="py-3 px-3 text-gray-300">${row.lunch}</td>
                    <td class="py-3 px-3 text-gray-300">${row.snack}</td>
                    <td class="py-3 px-3 text-gray-300">${row.dinner}</td>
                    <td class="py-3 px-3 text-right whitespace-nowrap">
                      <button onclick="openEditMealDayModal(${idx})" class="px-2.5 py-1 rounded bg-bgElevated border border-borderSubtle text-accent hover:border-emerald-500/40">Edit</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    function addFoodLog() {
      const mealType = document.getElementById('meal-type').value;
      const items = document.getElementById('meal-items').value.trim();
      const proteinEst = document.getElementById('meal-protein').value;
      const status = document.getElementById('meal-status').value;

      if (!items && status === 'completed') {
        alert('Please enter what you ate or mark the meal as skipped.');
        return;
      }

      state.foodLogs.push({
        id: 'flog-' + Date.now(),
        date: getLocalTodayISO(),
        mealType,
        items: items || 'Skipped meal — remember to have a normal, balanced next meal.',
        proteinEst: proteinEst ? Number(proteinEst) : null,
        status
      });
      saveState();
      renderNutritionPlanner(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function deleteFoodLog(id) {
      state.foodLogs = state.foodLogs.filter(f => f.id !== id);
      saveState();
      renderNutritionPlanner(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function resetMealPlanToDefault() {
      if (!confirm('Restore the 7-day meal plan back to the original default schedule?')) return;
      state.mealPlan = JSON.parse(JSON.stringify(DEFAULT_MEAL_PLAN));
      saveState();
      renderNutritionPlanner(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function openEditMealDayModal(dayIdx) {
      const row = state.mealPlan[dayIdx];
      showModal(`
        <h3 class="text-lg font-bold text-white">Edit ${row.day} Meal Plan</h3>
        <div class="space-y-3 text-xs">
          <div>
            <label class="text-gray-400 block mb-1">Breakfast</label>
            <input id="edit-bf" value="${row.breakfast}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
          </div>
          <div>
            <label class="text-gray-400 block mb-1">Office Lunch</label>
            <input id="edit-lu" value="${row.lunch}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
          </div>
          <div>
            <label class="text-gray-400 block mb-1">Afternoon Snack</label>
            <input id="edit-sn" value="${row.snack}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
          </div>
          <div>
            <label class="text-gray-400 block mb-1">Dinner</label>
            <input id="edit-di" value="${row.dinner}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-3">
          <button onclick="closeModal()" class="px-4 py-2 rounded bg-bgElevated text-gray-300 text-xs">Cancel</button>
          <button onclick="saveMealDayEdit(${dayIdx})" class="px-4 py-2 rounded bg-accent text-black font-semibold text-xs">Save Changes</button>
        </div>
      `);
    }

    function saveMealDayEdit(dayIdx) {
      state.mealPlan[dayIdx].breakfast = document.getElementById('edit-bf').value;
      state.mealPlan[dayIdx].lunch = document.getElementById('edit-lu').value;
      state.mealPlan[dayIdx].snack = document.getElementById('edit-sn').value;
      state.mealPlan[dayIdx].dinner = document.getElementById('edit-di').value;
      saveState();
      closeModal();
      renderNutritionPlanner(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function openOfficeLunchHelperModal() {
      showModal(`
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-white">Help Me Choose Office Lunch</h3>
            <button onclick="closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>
          <p class="text-xs text-gray-400">
            Enter what the canteen or nearby restaurant is serving today (e.g., "steamed momos, chowmein, oily chicken curry, white rice, dal"):
          </p>
          <input id="canteen-input" type="text" placeholder="e.g., momos, fried noodles, rice, dal, oily curry" class="w-full p-3 rounded-lg bg-bgMain border border-borderSubtle text-sm text-white" />
          <button onclick="analyzeCanteenOptions()" class="w-full py-2.5 rounded-lg bg-accent text-black font-semibold text-xs">
            Get Realistic Portion & Protein Strategy
          </button>
          <div id="canteen-advice" class="space-y-2 text-xs text-gray-300 pt-2"></div>
        </div>
      `);
    }

    function analyzeCanteenOptions() {
      const raw = (document.getElementById('canteen-input').value || '').toLowerCase();
      const box = document.getElementById('canteen-advice');
      const tips = [];

      if (raw.includes('momo')) {
        tips.push('• <strong>Momos Strategy:</strong> Choose steamed over fried momos if available, prefer meat/paneer/egg fillings for protein, and pair a moderate portion (6–8 pieces) with clear soup or a side of vegetables. Add a boiled egg or plain yoghurt for afternoon snack to boost protein.');
      }
      if (raw.includes('noodle') || raw.includes('chowmein') || raw.includes('fried rice')) {
        tips.push('• <strong>Fried Noodles / Fried Rice Strategy:</strong> Ask for extra mixed vegetables or top with a boiled/poached egg or chicken pieces. Keep the portion moderate so you avoid the 3 PM office energy crash.');
      }
      if (raw.includes('oily') || raw.includes('curry') || raw.includes('gravy')) {
        tips.push('• <strong>Oily Curry Strategy:</strong> Spoon out the solid protein pieces (chicken, fish, egg, paneer, or thick dal solids) and vegetables while leaving excess floating oil behind in the serving bowl.');
      }
      if (raw.includes('rice') || raw.includes('dal') || !raw) {
        tips.push('• <strong>Mountain-of-Rice Strategy:</strong> Ask for a half-serving of rice upfront (~1/4 of your plate), double the cooked vegetables (~1/2 plate), and ask for thick dal + eggs/chicken/fish (~1/4 plate).');
      }
      tips.push('• <strong>Evening Reminder:</strong> Even if today\'s office lunch was heavy or oily, <em>do not skip dinner</em>. Have a light, simple dinner (such as dal, vegetables, and a small portion of rice or eggs) and drink plenty of water.');

      box.innerHTML = `<div class="p-3.5 rounded-lg bg-bgMain border border-emerald-500/30 space-y-2 leading-relaxed">${tips.join('<br/>')}</div>`;
    }

    /********************************************************************
     * PHASE 10: HABITS, SLEEP & FACIAL PUFFINESS, AND WEEKEND ALCOHOL
     ********************************************************************/
    function renderHabitTracker(container) {
      const todayISO = getLocalTodayISO();
      const todayHabits = getTodayHabits();

      // Calculate 10 Weekly Habit Items dynamically
      const now = new Date();
      const day = now.getDay();
      const monOffset = day === 0 ? -6 : 1 - day;
      const monDate = new Date(now);
      monDate.setHours(0,0,0,0);
      monDate.setDate(now.getDate() + monOffset);

      const thisWeekWorkouts = state.workoutLogs.filter(w => new Date(w.date + 'T00:00:00') >= monDate);
      const doneA = thisWeekWorkouts.some(w => w.workoutCode === 'A');
      const doneB = thisWeekWorkouts.some(w => w.workoutCode === 'B');
      const doneC = thisWeekWorkouts.some(w => w.workoutCode === 'C');
      const noFridayStrength = !thisWeekWorkouts.some(w => new Date(w.date + 'T00:00:00').getDay() === 5);

      const weeklyTenChecklist = [
        { label: 'Completed Monday Workout A', done: doneA },
        { label: 'Completed Wednesday Workout B', done: doneB },
        { label: 'Kept Friday as a protected full rest day (counted as success)', done: noFridayStrength },
        { label: 'Completed Saturday Workout C', done: doneC },
        { label: 'Walked on at least two active recovery days', done: todayHabits.walking },
        { label: 'Included protein with daily meals', done: todayHabits.proteinMeals },
        { label: 'Improved breakfast and dinner consistency (no skipping)', done: todayHabits.balancedMeals },
        { label: 'Reduced alcohol intake or chose an alcohol-free weekend', done: todayHabits.alcoholMindful },
        { label: 'Slept 7–8 hours on most nights', done: todayHabits.sleep78 },
        { label: 'Recorded weight or waist measurements when scheduled', done: state.measurements.length > 0 }
      ];
      const score = weeklyTenChecklist.filter(x => x.done).length;

      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- 10-Point Weekly Habit Scorecard -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-lg font-bold text-white">10-Point Weekly Habit Tracker</h2>
                <p class="text-xs text-gray-400">Rest days count as following the plan, never as failures.</p>
              </div>
              <span class="px-3 py-1 rounded-full bg-accentMuted text-accent font-bold text-xs">${score} / 10 Active</span>
            </div>
            <div class="space-y-2">
              ${weeklyTenChecklist.map(item => `
                <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle flex items-center justify-between text-xs">
                  <span class="text-gray-200">${item.label}</span>
                  <span class="px-2 py-0.5 rounded font-semibold ${item.done ? 'bg-accentMuted text-accent' : 'bg-bgElevated text-gray-400'}">
                    ${item.done ? 'On Track' : 'In Progress'}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Sleep & Facial Puffiness Tracker -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <div>
              <h2 class="text-lg font-bold text-white">Sleep & Morning Facial Puffiness Log</h2>
              <p class="text-xs text-gray-400">
                Morning facial puffiness can be influenced by sleep duration, evening salt, alcohol, hydration, allergies, or medical conditions—do not assume it is body fat, and facial exercises will not spot-reduce facial fat.
              </p>
            </div>

            <!-- Medical Warning Callout -->
            <div class="p-3 rounded-lg bg-red-950/25 border border-red-500/30 text-[11px] text-red-200 leading-relaxed">
              <strong>Urgent Medical Warning:</strong> If facial swelling is sudden, severe, or accompanied by difficulty breathing, hives, or lip/tongue swelling, seek urgent medical care immediately.
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div>
                <label class="text-gray-400 block mb-1">Sleep Hours</label>
                <input id="sleep-hours" type="number" step="0.5" value="7.5" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Morning Puffiness</label>
                <select id="sleep-puff" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white">
                  <option>None</option>
                  <option>Mild</option>
                  <option>Moderate</option>
                </select>
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Likely Factor</label>
                <input id="sleep-notes" type="text" placeholder="e.g., salty dinner, late night" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
            </div>
            <button onclick="addSleepLog()" class="w-full py-2.5 rounded-lg bg-accent text-black font-semibold text-xs">Log Sleep & Recovery</button>

            <div class="space-y-2 max-h-44 overflow-y-auto pt-2">
              ${state.sleepLogs.slice().reverse().slice(0, 5).map(s => `
                <div class="p-2.5 rounded bg-bgMain border border-borderSubtle flex items-center justify-between text-xs">
                  <span><strong>${s.date}:</strong>${s.hours} hrs • Puffiness: ${s.puffiness}${s.notes ? `(${s.notes})` : ''}</span>
                  <button onclick="deleteSleepLog('${s.id}')" class="text-gray-500 hover:text-red-400"><i data-lucide="x" class="w-3.5 h-3.5"></i></button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Optional Private Weekend Alcohol Tracker -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 class="text-base font-bold text-white">Private Weekend Alcohol Tracker (Optional & Non-Judgmental)</h3>
              <p class="text-xs text-gray-400">
                Track weekend drinks to observe how they affect sleep and next-day energy. Never fast, skip meals, or punish yourself with excessive exercise after drinking.
              </p>
            </div>
            <span class="px-3 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold shrink-0">
              Safety Reminder: Never drive after drinking.
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label class="text-gray-400 block mb-1">Weekend Choice</label>
              <select id="alc-drank" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white">
                <option value="no">Alcohol-Free Day / Weekend</option>
                <option value="yes">Had Drinks</option>
              </select>
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Drink Type & Quantity</label>
              <input id="alc-qty" type="text" placeholder="e.g., 2 beers or 0 (alcohol-free)" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Next-Day Energy</label>
              <select id="alc-energy" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white">
                <option>Fresh & Rested</option>
                <option>Slightly Tired</option>
                <option>Low Energy / Dehydrated</option>
              </select>
            </div>
            <div class="flex items-end">
              <button onclick="addAlcoholLog()" class="w-full py-2 rounded-lg bg-bgElevated hover:bg-emerald-950/40 border border-borderSubtle text-white font-semibold">Save Entry</button>
            </div>
          </div>

          <div class="space-y-2">
            ${state.alcoholLogs.slice().reverse().slice(0, 4).map(a => `
              <div class="p-3 rounded-lg bg-bgMain border border-borderSubtle flex items-center justify-between text-xs">
                <div>
                  <span class="font-bold ${a.drank ? 'text-amber-300' : 'text-accent'}">${a.date} •${a.drank ? 'Logged Drinks' : 'Alcohol-Free Choice'}</span>
                  <span class="text-gray-300 ml-2">${a.quantity} • Next-Day: ${a.nextDayEnergy}</span>
                </div>
                <button onclick="deleteAlcoholLog('${a.id}')" class="text-gray-500 hover:text-red-400"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    function addSleepLog() {
      const hours = Number(document.getElementById('sleep-hours').value) || 7;
      const puffiness = document.getElementById('sleep-puff').value;
      const notes = document.getElementById('sleep-notes').value.trim();
      state.sleepLogs.push({ id: 'slp-' + Date.now(), date: getLocalTodayISO(), hours, puffiness, notes });
      if (hours >= 7) {
        const h = getTodayHabits();
        h.sleep78 = true;
        state.dailyHabits[getLocalTodayISO()] = h;
      }
      saveState();
      renderHabitTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function deleteSleepLog(id) {
      state.sleepLogs = state.sleepLogs.filter(s => s.id !== id);
      saveState();
      renderHabitTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function addAlcoholLog() {
      const drank = document.getElementById('alc-drank').value === 'yes';
      const quantity = document.getElementById('alc-qty').value.trim() || (drank ? 'Moderate drinks' : 'Alcohol-free');
      const nextDayEnergy = document.getElementById('alc-energy').value;
      state.alcoholLogs.push({ id: 'alc-' + Date.now(), date: getLocalTodayISO(), drank, quantity, nextDayEnergy });
      saveState();
      renderHabitTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function deleteAlcoholLog(id) {
      state.alcoholLogs = state.alcoholLogs.filter(a => a.id !== id);
      saveState();
      renderHabitTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    /********************************************************************
     * PHASE 11: BODY PROGRESS TRACKER, CHARTS & MILESTONES
     ********************************************************************/
    function renderProgressTracker(container) {
      const weightPoints = state.measurements.filter(m => m.weightKg !== null && m.weightKg !== '');
      const waistPoints = state.measurements.filter(m => m.waistCm !== null && m.waistCm !== '');
      const pushupPoints = state.measurements.filter(m => m.pushups !== null && m.pushups !== '');
      const plankPoints = state.measurements.filter(m => m.plankSec !== null && m.plankSec !== '');
      const metrics = getProgramMetrics();

      container.innerHTML = `
        <!-- Log Measurements & Performance -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 class="text-xl font-bold text-white">Body Measurements & Exercise Performance</h2>
              <p class="text-xs text-gray-400">
                Suggested schedule: Weight weekly at a similar morning time • Waist & Photos every 2–4 weeks • Performance when useful without testing to exhaustion.
              </p>
            </div>
            <span class="text-xs text-accent font-semibold">Zero Fabricated Data Policy</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 text-xs">
            <div>
              <label class="text-gray-400 block mb-1">Date</label>
              <input id="m-date" type="date" value="${getLocalTodayISO()}" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Weight (kg)</label>
              <input id="m-weight" type="number" step="0.1" placeholder="65.0" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Waist (cm)</label>
              <input id="m-waist" type="number" step="0.5" placeholder="78.0" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Clean Push-ups</label>
              <input id="m-pushups" type="number" placeholder="10" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Plank Hold (sec)</label>
              <input id="m-plank" type="number" placeholder="35" class="w-full p-2 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div class="flex items-end">
              <button onclick="saveMeasurementRecord()" class="w-full py-2 rounded-lg bg-accent text-black font-semibold">Save Record</button>
            </div>
          </div>
        </div>

        <!-- Milestone Checkpoints: Week 1, Week 4, Week 8, Week 12 -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          ${[1, 4, 8, 12].map(wk => {
            const reached = metrics.currentWeek >= wk;
            return `
              <div class="p-4 rounded-xl border ${reached ? 'bg-accentMuted border-emerald-500/40' : 'bg-bgCard border-borderSubtle'}">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold ${reached ? 'text-accent' : 'text-gray-400'}">WEEK ${wk} CHECKPOINT</span>
                  <i data-lucide="${reached ? 'check-circle-2' : 'clock'}" class="w-4 h-4 ${reached ? 'text-accent' : 'text-gray-500'}"></i>
                </div>
                <p class="text-xs text-white font-medium mt-1">${reached ? 'Milestone Reached' : 'Upcoming Checkpoint'}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">${wk === 1 ? 'Baseline habits & movement setup' : wk === 4 ? '1-month consistency & waist check' : wk === 8 ? '2-month strength & posture review' : '12-week athletic milestone'}</p>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Honest SVG Charts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white">Body Weight Over Time (kg)</h3>
            ${renderSVGChart(weightPoints, 'weightKg', '#10b981', 'kg')}
          </div>
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white">Waist Circumference Over Time (cm)</h3>
            ${renderSVGChart(waistPoints, 'waistCm', '#38bdf8', 'cm')}
          </div>
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white">Push-Ups Completed (Good Form)</h3>
            ${renderSVGChart(pushupPoints, 'pushups', '#f59e0b', 'reps')}
          </div>
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-5 space-y-3">
            <h3 class="text-sm font-bold text-white">Forearm Plank Duration (Seconds)</h3>
            ${renderSVGChart(plankPoints, 'plankSec', '#a855f7', 'sec')}
          </div>
        </div>

        <!-- Saved Measurement History Table -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-3">
          <h3 class="text-base font-bold text-white">Recorded Measurements & Performance Log</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="border-b border-borderSubtle text-gray-400">
                  <th class="py-2 px-2">Date</th>
                  <th class="py-2 px-2">Weight</th>
                  <th class="py-2 px-2">Waist</th>
                  <th class="py-2 px-2">Push-ups</th>
                  <th class="py-2 px-2">Plank</th>
                  <th class="py-2 px-2 text-right">Delete</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-borderSubtle">
                ${state.measurements.slice().reverse().map(m => `
                  <tr>
                    <td class="py-2.5 px-2 font-medium text-white">${m.date}</td>
                    <td class="py-2.5 px-2 text-gray-300">${m.weightKg ? m.weightKg + ' kg' : '—'}</td>
                    <td class="py-2.5 px-2 text-gray-300">${m.waistCm ? m.waistCm + ' cm' : '—'}</td>
                    <td class="py-2.5 px-2 text-gray-300">${m.pushups ? m.pushups + ' reps' : '—'}</td>
                    <td class="py-2.5 px-2 text-gray-300">${m.plankSec ? m.plankSec + ' sec' : '—'}</td>
                    <td class="py-2.5 px-2 text-right">
                      <button onclick="deleteMeasurement('${m.id}')" class="text-gray-500 hover:text-red-400"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Private Browser Progress Photos -->
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 class="text-base font-bold text-white">Private Local Progress Photographs (Every 2–4 Weeks)</h3>
              <p class="text-xs text-gray-400">Photos stay strictly inside your browser's localStorage and are never uploaded anywhere.</p>
            </div>
            <label class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle hover:border-emerald-500/40 text-xs font-semibold text-white cursor-pointer">
              + Add Progress Photo
              <input type="file" accept="image/*" class="hidden" onchange="handlePhotoUpload(event)" />
            </label>
          </div>
          ${state.progressPhotos.length === 0 ? `<p class="text-xs text-gray-500">No progress photos stored yet. Take photos every 2–4 weeks in consistent lighting.</p>` : `
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
              ${state.progressPhotos.map(p => `
                <div class="bg-bgMain border border-borderSubtle rounded-lg overflow-hidden">
                  <img src="${p.dataUrl}" alt="Progress" class="w-full h-40 object-cover" />
                  <div class="p-2.5 flex items-center justify-between text-xs">
                    <span class="text-gray-300 font-medium">${p.date} (Wk ${p.weekNum})</span>
                    <button onclick="deletePhoto('${p.id}')" class="text-red-400 hover:underline">Delete</button>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    }

    function renderSVGChart(points, key, strokeColor, unit) {
      if (!points || points.length === 0) {
        return `<div class="h-36 rounded-lg bg-bgMain border border-borderSubtle flex items-center justify-center text-xs text-gray-500 p-4 text-center">No ${unit} records logged yet. Log a real measurement above to plot your progress.</div>`;
      }
      const sorted = points.slice().sort((a, b) => a.date.localeCompare(b.date));
      const vals = sorted.map(p => Number(p[key]));
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const pad = (max - min) === 0 ? 2 : (max - min) * 0.2;
      const yMin = min - pad;
      const yMax = max + pad;

      const width = 420;
      const height = 140;
      const coords = sorted.map((p, i) => {
        const x = sorted.length === 1 ? width / 2 : 30 + (i / (sorted.length - 1)) * (width - 60);
        const y = height - 25 - ((Number(p[key]) - yMin) / (yMax - yMin)) * (height - 50);
        return { x, y, val: p[key], date: p.date.slice(5) };
      });

      const polyline = coords.map(c => `${c.x},${c.y}`).join(' ');

      return `
        <svg viewBox="0 0 ${width} ${height}" class="w-full h-36 bg-bgMain rounded-lg border border-borderSubtle">
          ${coords.length > 1 ? `<polyline fill="none" stroke="${strokeColor}" stroke-width="2.5" points="${polyline}" />` : ''}
          ${coords.map(c => `
            <circle cx="${c.x}" cy="${c.y}" r="4" fill="${strokeColor}" />
            <text x="${c.x}" y="${c.y - 8}" text-anchor="middle" fill="#e5e7eb" font-size="10" font-weight="bold">${c.val}</text>
            <text x="${c.x}" y="${height - 7}" text-anchor="middle" fill="#9ca3af" font-size="9">${c.date}</text>
          `).join('')}
        </svg>
      `;
    }

    function saveMeasurementRecord() {
      const date = document.getElementById('m-date').value || getLocalTodayISO();
      const weightVal = document.getElementById('m-weight').value;
      const waistVal = document.getElementById('m-waist').value;
      const pushupsVal = document.getElementById('m-pushups').value;
      const plankVal = document.getElementById('m-plank').value;

      if (!weightVal && !waistVal && !pushupsVal && !plankVal) {
        alert('Enter at least one measurement or performance number to save.');
        return;
      }

      state.measurements.push({
        id: 'm-' + Date.now(),
        date,
        weightKg: weightVal ? Number(weightVal) : null,
        waistCm: waistVal ? Number(waistVal) : null,
        pushups: pushupsVal ? Number(pushupsVal) : null,
        plankSec: plankVal ? Number(plankVal) : null
      });
      if (weightVal) state.profile.weightKg = Number(weightVal);
      saveState();
      renderProgressTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function deleteMeasurement(id) {
      state.measurements = state.measurements.filter(m => m.id !== id);
      saveState();
      renderProgressTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function handlePhotoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const metrics = getProgramMetrics();
        state.progressPhotos.push({
          id: 'photo-' + Date.now(),
          date: getLocalTodayISO(),
          weekNum: metrics.currentWeek,
          dataUrl: e.target.result
        });
        saveState();
        renderProgressTracker(document.getElementById('app-view'));
        lucide.createIcons();
      };
      reader.readAsDataURL(file);
    }

    function deletePhoto(id) {
      state.progressPhotos = state.progressPhotos.filter(p => p.id !== id);
      saveState();
      renderProgressTracker(document.getElementById('app-view'));
      lucide.createIcons();
    }

    function openQuickMeasurementModal() {
      showModal(`
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-white">Quick Record Weight & Waist</h3>
            <button onclick="closeModal()" class="text-gray-400 hover:text-white">✕</button>
          </div>
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label class="text-gray-400 block mb-1">Weight (kg)</label>
              <input id="qm-weight" type="number" step="0.1" value="${state.profile.weightKg}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
            <div>
              <label class="text-gray-400 block mb-1">Waist (cm, optional)</label>
              <input id="qm-waist" type="number" step="0.5" placeholder="78.0" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
            </div>
          </div>
          <button onclick="saveQuickModalMeasurement()" class="w-full py-2.5 rounded-lg bg-accent text-black font-semibold text-xs">Save Measurement</button>
        </div>
      `);
    }

    function saveQuickModalMeasurement() {
      const w = document.getElementById('qm-weight').value;
      const wst = document.getElementById('qm-waist').value;
      state.measurements.push({
        id: 'm-' + Date.now(),
        date: getLocalTodayISO(),
        weightKg: w ? Number(w) : null,
        waistCm: wst ? Number(wst) : null,
        pushups: null,
        plankSec: null
      });
      if (w) state.profile.weightKg = Number(w);
      saveState();
      closeModal();
      navigate(currentTab);
    }

    /********************************************************************
     * PHASE 12: PERSONAL AI FITNESS COACH (LOCAL CONTEXT ENGINE + HONEST LABELING)
     ********************************************************************/
    const COACH_PROMPTS = [
      'What workout do I have today?',
      'I missed Monday. How should I continue?',
      'I can only exercise for 20 minutes today. What can I reasonably do?',
      'The office only has rice and momos today. What should I choose?',
      'I completed all my push-up sets. Should I increase repetitions?',
      'Summarize my progress this week.',
      'Help me plan meals for the next seven days.',
      'I drank alcohol last night. How should I approach recovery today?'
    ];

    function renderAICoach(container) {
      container.innerHTML = `
        <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-5 max-w-4xl mx-auto">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-borderSubtle pb-4">
            <div>
              <span class="text-xs font-bold uppercase text-accent">Local Rule-Based Plan Assistant (Offline-First)</span>
              <h2 class="text-xl font-bold text-white">My Personal Fitness Coach</h2>
              <p class="text-xs text-gray-400">
                Uses your actual saved localStorage profile, schedule, workouts, and nutrition rules. Clearly labeled: no external cloud LLM API is connected by default so your data and API keys are never exposed in the browser.
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <span class="text-xs font-semibold text-gray-300">Ask a Common Question Based on Your Plan & Saved Data:</span>
            <div class="flex flex-wrap gap-2">
              ${COACH_PROMPTS.map(q => `
                <button onclick="askLocalCoach('${q.replace(/'/g, "\\'")}')" class="px-3 py-1.5 rounded-lg bg-bgElevated hover:bg-emerald-950/30 border border-borderSubtle hover:border-emerald-500/40 text-xs text-gray-200 transition">
                  ${q}
                </button>
              `).join('')}
            </div>
          </div>

          <div class="flex gap-2">
            <input id="coach-input" type="text" placeholder="Ask about your schedule, progression, office lunch, or recovery..." class="flex-1 p-3 rounded-lg bg-bgMain border border-borderSubtle text-sm text-white" onkeydown="if(event.key==='Enter') askLocalCoach(this.value)" />
            <button onclick="askLocalCoach(document.getElementById('coach-input').value)" class="px-5 py-3 rounded-lg bg-accent text-black font-semibold text-xs">
              Ask Coach
            </button>
          </div>

          <div id="coach-response" class="p-5 rounded-xl bg-bgMain border border-borderSubtle text-xs text-gray-200 leading-relaxed space-y-2">
            <div class="text-accent font-semibold">Coach Ready</div>
            <p class="text-gray-400">Select any question above or type your own to receive tailored guidance grounded in your saved workouts, Week ${getProgramMetrics().currentWeek} rules, and Friday rest protection.</p>
          </div>
        </div>
      `;
    }

    function askLocalCoach(question) {
      if (!question || !question.trim()) return;
      const q = question.toLowerCase();
      const metrics = getProgramMetrics();
      const todaySched = getTodaySchedule();
      const box = document.getElementById('coach-response');
      let reply = '';

      if (q.includes('workout do i have today') || q.includes('today')) {
        reply = `Today is <strong>${todaySched.dayName}</strong> (Week ${metrics.currentWeek} of 12). Your scheduled activity is <strong>${todaySched.title}</strong> (${todaySched.duration}).<br/><br/>Focus: ${todaySched.focus}`;
      } else if (q.includes('missed monday') || q.includes('missed')) {
        reply = `<strong>No problem at all—do not double up your next workout.</strong><br/>If today is Tuesday, you can either do Workout A today and keep Wednesday as Active Recovery, OR simply leave Monday behind and perform Wednesday's Workout B as scheduled. Friday remains your protected full rest day.`;
      } else if (q.includes('20 minutes') || q.includes('short on time')) {
        reply = `<strong>20-Minute Express Option:</strong><br/>1. Do a brisk 3-minute warm-up.<br/>2. Perform <strong>2 sets</strong> (instead of 3) of the first 4 core exercises in today's session (e.g., Push-ups, Squats/Lunges, Plank, and Upper Back Y/W Raises) with 45 seconds rest.<br/>Consistency always beats skipping the day entirely.`;
      } else if (q.includes('momo') || q.includes('office') || q.includes('lunch')) {
        reply = `<strong>Office Rice & Momos Strategy:</strong><br/>• Have a reasonable portion of steamed momos (6–8 pieces, ideally chicken/egg/paneer filling) and a smaller scoop of rice (~1/4 plate).<br/>• Ask for clear soup or extra vegetables on the side if available.<br/>• Have a high-protein afternoon snack (boiled egg, plain yoghurt, or milk) and eat a normal, balanced dinner tonight.`;
      } else if (q.includes('push-up') || q.includes('increase repetitions') || q.includes('progression')) {
        reply = `<strong>Progression Check (Week ${metrics.currentWeek}):</strong><br/>${metrics.phaseGuidance}<br/><br/>If you completed all prescribed sets at the top of the repetition range (12 clean reps) with steady alignment and no hip sagging, add 1–2 reps next session or slow your lowering phase to 3 seconds. If the last reps felt shaky, keep the current rep count until it feels solid.`;
      } else if (q.includes('summarize') || q.includes('progress this week')) {
        const latestW = state.measurements.filter(m => m.weightKg).slice(-1)[0];
        reply = `<strong>Your Real Saved Progress Summary:</strong><br/>• Program Week: <strong>Week ${metrics.currentWeek} of 12</strong><br/>• Strength Workouts Completed This Week: <strong>${metrics.thisWeekCount} / 3</strong><br/>• Total Strength Workouts Logged: <strong>${metrics.totalCompletedStrength}</strong><br/>• Latest Recorded Weight: <strong>${latestW ? latestW.weightKg + ' kg (' + latestW.date + ')' : 'Not recorded'}</strong>`;
      } else if (q.includes('plan meals') || q.includes('seven days')) {
        reply = `<strong>Your 7-Day Balanced Office Plan:</strong><br/>Your editable 7-day meal plan is ready in the <em>Diet & Meal Planner</em> tab. Aim for: Eggs/Oats/Yoghurt at breakfast, 1/2 vegetables + 1/4 protein (dal, eggs, chicken, fish) + 1/4 rice at lunch and dinner, and fruit/nuts/milk as an afternoon snack.`;
      } else if (q.includes('alcohol') || q.includes('drank')) {
        reply = `<strong>Post-Alcohol Recovery Protocol:</strong><br/>1. <strong>Do not fast, skip breakfast/dinner, or punish yourself with extra exercise.</strong><br/>2. Rehydrate steadily with water and eat normal balanced meals containing protein, rice, vegetables, and fruit (such as a banana with eggs).<br/>3. If you feel fatigued today, opt for a gentle 20-minute walk or rest, and get 7–8 hours of sleep tonight.`;
      } else {
        reply = `Based on your saved profile (Week ${metrics.currentWeek}, ${todaySched.dayName} — ${todaySched.title}): Focus on controlled form, keeping Friday as your full rest day, and balancing office meals with 1/2 vegetables, 1/4 protein, and 1/4 rice.`;
      }

      box.innerHTML = `<div class="text-accent font-semibold mb-1">Question: "${question}"</div><div>${reply}</div>`;
    }

    /********************************************************************
     * PHASE 13: SETTINGS, JSON EXPORT / IMPORT & RESET
     ********************************************************************/
    function renderSettings(container) {
      const p = state.profile;
      container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Profile & Program Start Date -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <h2 class="text-lg font-bold text-white">Personal Profile & Program Settings</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label class="text-gray-400 block mb-1">Program Start Date (Calculates Week 1–12)</label>
                <input id="set-start" type="date" value="${p.startDate}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Age</label>
                <input id="set-age" type="number" value="${p.age}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Height (cm)</label>
                <input id="set-height" type="number" value="${p.heightCm}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Current Weight (kg)</label>
                <input id="set-weight" type="number" step="0.1" value="${p.weightKg}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Default Rest Timer (Seconds)</label>
                <input id="set-rest" type="number" value="${p.restTimerDefault}" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white" />
              </div>
              <div>
                <label class="text-gray-400 block mb-1">Timer Audio Beep</label>
                <select id="set-sound" class="w-full p-2.5 rounded bg-bgMain border border-borderSubtle text-white">
                  <option value="yes" ${p.soundEnabled ? 'selected' : ''}>Enabled</option>
                  <option value="no" ${!p.soundEnabled ? 'selected' : ''}>Muted</option>
                </select>
              </div>
            </div>
            <button onclick="saveProfileSettings()" class="px-5 py-2.5 rounded-lg bg-accent text-black font-semibold text-xs">
              Save Profile Settings
            </button>
          </div>

          <!-- LocalStorage Backup, Export, Import & Reset -->
          <div class="bg-bgCard border border-borderSubtle rounded-xl p-6 space-y-4">
            <h2 class="text-lg font-bold text-white">Local Data Backup & Persistence</h2>
            <div class="p-3.5 rounded-lg bg-bgMain border border-borderSubtle text-xs text-gray-300 leading-relaxed">
              <strong>Important Browser Storage Notice:</strong> All your workouts, meal logs, habits, and measurements are saved automatically in this browser's <code>localStorage</code>. Browser data does not automatically synchronize across devices and can be lost if you clear your browser cache. Export a JSON backup periodically to keep a permanent copy or move data between your computer and phone.
            </div>

            <div class="flex flex-wrap gap-3 pt-2">
              <button onclick="exportDataJSON()" class="px-4 py-2.5 rounded-lg bg-accent text-black font-semibold text-xs flex items-center gap-2">
                <i data-lucide="download" class="w-4 h-4"></i> Export Backup (.JSON)
              </button>
              <label class="px-4 py-2.5 rounded-lg bg-bgElevated border border-borderSubtle hover:border-emerald-500/40 text-white font-semibold text-xs flex items-center gap-2 cursor-pointer">
                <i data-lucide="upload" class="w-4 h-4 text-accent"></i> Import Backup (.JSON)
                <input type="file" accept=".json,application/json" class="hidden" onchange="importDataJSON(event)" />
              </label>
            </div>

            <div class="pt-4 border-t border-borderSubtle">
              <button onclick="resetAllData()" class="px-4 py-2 rounded-lg bg-red-950/30 border border-red-500/40 text-red-300 hover:bg-red-900/40 text-xs font-semibold flex items-center gap-2">
                <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Reset All Application Data (Requires Confirmation)
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function saveProfileSettings() {
      state.profile.startDate = document.getElementById('set-start').value || state.profile.startDate;
      state.profile.age = Number(document.getElementById('set-age').value) || 25;
      state.profile.heightCm = Number(document.getElementById('set-height').value) || 172;
      state.profile.weightKg = Number(document.getElementById('set-weight').value) || 65;
      state.profile.restTimerDefault = Number(document.getElementById('set-rest').value) || 60;
      state.profile.soundEnabled = document.getElementById('set-sound').value === 'yes';
      saveState();
      alert('Settings saved and program week recalculated.');
      navigate('settings');
    }

    function exportDataJSON() {
      const dataStr = JSON.stringify(state, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leanfit-backup-${getLocalTodayISO()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }

    function importDataJSON(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (!imported.profile || !imported.mealPlan) throw new Error('Invalid LeanFit JSON structure.');
          state = { ...createInitialState(), ...imported };
          saveState();
          alert('Backup imported successfully!');
          navigate('dashboard');
        } catch (err) {
          alert('Could not import file: ' + err.message);
        }
      };
      reader.readAsText(file);
    }

    function resetAllData() {
      if (!confirm('Are you sure you want to permanently delete all saved workouts, meals, measurements, and habits from this browser?')) return;
      localStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
      saveState();
      navigate('dashboard');
    }

    /********************************************************************
     * MODAL & STANDALONE TIMER HELPERS
     ********************************************************************/
    function showModal(innerHtml) {
      const backdrop = document.getElementById('modal-backdrop');
      const content = document.getElementById('modal-content');
      content.innerHTML = innerHtml;
      backdrop.classList.remove('hidden');
      backdrop.classList.add('flex');
      lucide.createIcons();
    }

    function closeModal() {
      const backdrop = document.getElementById('modal-backdrop');
      backdrop.classList.add('hidden');
      backdrop.classList.remove('flex');
    }

    function openStandaloneTimerModal(title, seconds) {
      restTimerRemaining = seconds;
      restTimerRunning = false;
      showModal(`
        <div class="text-center space-y-4">
          <h3 class="text-lg font-bold text-white">${title} — Timer</h3>
          <div id="rest-timer-display" class="text-4xl font-mono font-bold text-accent py-2">${formatSeconds(seconds)}</div>
          <div class="flex justify-center gap-2">
            <button onclick="startRestTimer(${seconds})" class="px-4 py-2 rounded-lg bg-accent text-black font-semibold text-xs">Start (${seconds}s)</button>
            <button onclick="startRestTimer(60)" class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-white text-xs">60s Rest</button>
            <button onclick="startRestTimer(90)" class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-white text-xs">90s Rest</button>
            <button onclick="stopRestTimer()" class="px-4 py-2 rounded-lg bg-bgElevated border border-borderSubtle text-gray-400 text-xs">Reset</button>
          </div>
          <button onclick="closeModal()" class="text-xs text-gray-400 hover:text-white underline pt-2">Close Window</button>
        </div>
      `);
      ensurePlayerClock();
    }

    // Initialize Application on Load
    window.addEventListener('DOMContentLoaded', () => {
      navigate('dashboard');
    });
