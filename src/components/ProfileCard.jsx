import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">

      {/* Cover Section */}
      <div className="relative h-40">
        <img
          src="https://images.unsplash.com/photo-1769540209459-ae620b0390ce?q=80&w=1171&auto=format&fit=crop"
          alt="cover"
          className="w-full h-full object-cover"
        />

        {/* Avatar */}
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-6 px-6 text-center space-y-3">

        <h1 className="text-cyan-600 font-semibold text-xl">
          Gaurav Janghu
        </h1>

        <h3 className="text-gray-400 text-sm">
          @gauravjanghu
        </h3>

        <p className="text-gray-500 text-sm italic">
          I like the way you work it <br />
          No diggity <br />
          I wanna bag it up
        </p>

        <div className="border-t pt-4 flex justify-around text-sm">
          <Stat value="12" label="Files" />
          <Stat value="2GB" label="Used" />
          <Stat value="$24.6" label="Spent" />
        </div>

      </div>
    </div>
  );
};

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <h4 className="font-semibold text-gray-700">{value}</h4>
    <h5 className="text-xs text-gray-400">{label}</h5>
  </div>
);

export default ProfileCard;