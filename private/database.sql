-- public.booking_types definition
-- Drop table
-- DROP TABLE booking_types;
CREATE TABLE booking_types (
    booking_type_id serial4 NOT NULL,
    booking_type_name varchar(50) NOT NULL,
    CONSTRAINT booking_types_booking_type_name_key UNIQUE (booking_type_name),
    CONSTRAINT booking_types_pkey PRIMARY KEY (booking_type_id)
);
-- public.bookings definition
-- Drop table
-- DROP TABLE bookings;
CREATE TABLE bookings (
    booking_id serial4 NOT NULL,
    court_name varchar(20) NOT NULL,
    member_name varchar(50) NOT NULL,
    booked_at timestamp DEFAULT now() NULL,
    day_name varchar(20) NOT NULL,
    start_time time NOT NULL,
    duration_hours int4 NOT NULL,
    booking_type_name varchar(50) NOT NULL,
    CONSTRAINT bookings_pkey PRIMARY KEY (booking_id),
    CONSTRAINT fk_booking_type FOREIGN KEY (booking_type_name) REFERENCES booking_types(booking_type_name) ON DELETE CASCADE,
    CONSTRAINT fk_court FOREIGN KEY (court_name) REFERENCES courts(court_name) ON DELETE CASCADE,
    CONSTRAINT fk_day FOREIGN KEY (day_name) REFERENCES days_of_week(day_name) ON DELETE CASCADE,
    CONSTRAINT fk_duration FOREIGN KEY (duration_hours) REFERENCES durations(duration_hours) ON DELETE CASCADE
);
-- public.courts definition
-- Drop table
-- DROP TABLE courts;
CREATE TABLE courts (
    court_id serial4 NOT NULL,
    court_name varchar(20) NOT NULL,
    CONSTRAINT courts_court_name_key UNIQUE (court_name),
    CONSTRAINT courts_pkey PRIMARY KEY (court_id)
);
-- public.days_of_week definition
-- Drop table
-- DROP TABLE days_of_week;
CREATE TABLE days_of_week (
    day_id serial4 NOT NULL,
    day_name varchar(20) NOT NULL,
    CONSTRAINT days_of_week_day_name_key UNIQUE (day_name),
    CONSTRAINT days_of_week_pkey PRIMARY KEY (day_id)
);
-- public.durations definition
-- Drop table
-- DROP TABLE durations;
CREATE TABLE durations (
    duration_id serial4 NOT NULL,
    duration_hours int4 NOT NULL,
    CONSTRAINT durations_duration_hours_key UNIQUE (duration_hours),
    CONSTRAINT durations_pkey PRIMARY KEY (duration_id)
);
-- public.start_times definition
-- Drop table
-- DROP TABLE start_times;
CREATE TABLE start_times (
    start_time_id serial4 NOT NULL,
    start_time time NOT NULL,
    CONSTRAINT start_times_start_time_key UNIQUE (start_time)
);