/****************************************************************/
/*      KorgKP3 MIDI controller script v1.00             	*/
/*          By EndJoyz		                		*/
/*      						        */
/*      For Mixxx version 1.11                                  */
/****************************************************************/

KorgKP3 = new function() {
   print(" - KORG KP3 FUNCTION - ");
}

KorgKP3.init = function (id) {  
  print(" - KORG KP3 INIT - ");
};

KorgKP3.holdon = false;
KorgKP3.hold = function (channel, control, value, status, group) {
    if(value==127){ KorgKP3.holdon=true; } else { KorgKP3.holdon = false; }
}

KorgKP3.btA = function (channel, control, value, status, group) {
    if(!KorgKP3.holdon){
      engine.setValue("[Channel1]","beatsync", true);
    } else {
      engine.setValue("[Channel1]","LoadSelectedTrack", true);
    }
}

KorgKP3.btB = function (channel, control, value, status, group) {
    if(!KorgKP3.holdon){
      engine.setValue("[Channel1]","cue_default", true);
    } else {
      engine.setValue("[Playlist]","SelectPrevTrack", true);
    }
}

KorgKP3.btC = function (channel, control, value, status, group) {
    if(!KorgKP3.holdon){
      engine.setValue("[Channel2]","cue_default", true);
    } else {
      engine.setValue("[Playlist]","SelectNextTrack", true);
    }
}

KorgKP3.btD = function (channel, control, value, status, group) {
    if(!KorgKP3.holdon){
      engine.setValue("[Channel2]","beatsync", true);
    } else {
      engine.setValue("[Channel2]","LoadSelectedTrack", true);
    }
}

KorgKP3.bt1 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_1_activate", true);
    } else {
      engine.setValue("[Channel1]", "beatloop_4_activate", true);
      engine.setValue("[Channel1]", "beatloop_4_enabled", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_1_activate", false);
    }
  }
}

KorgKP3.bt2 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_2_activate", true);
    } else {
      engine.setValue("[Channel1]", "loop_halve", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_2_activate", false);
    }
  }
}

KorgKP3.bt3 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_3_activate", true);
    } else {
      engine.setValue("[Channel1]", "loop_double", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_3_activate", false);
    }
  }
}

KorgKP3.bt4 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_4_activate", true);
    } else {
      engine.setValue("[Channel1]", "reloop_exit", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel1]", "hotcue_4_activate", false);
    }
  }
}

KorgKP3.bt5 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_1_activate", true);
    } else {
      engine.setValue("[Channel2]", "beatloop_4_activate", true);
      engine.setValue("[Channel2]", "beatloop_4_enabled", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_1_activate", false);
    }
  }
}

KorgKP3.bt6 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_2_activate", true);
    } else {
      engine.setValue("[Channel2]", "loop_halve", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_2_activate", false);
    }
  }
}

KorgKP3.bt7 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_3_activate", true);
    } else {
      engine.setValue("[Channel2]", "loop_double", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_3_activate", false);
    }
  }
}

KorgKP3.bt8 = function (channel, control, value, status, group) {
  if(value==127){
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_4_activate", true);
    } else {
      engine.setValue("[Channel2]", "reloop_exit", true);
    }
  } else {
    if(KorgKP3.holdon){
      engine.setValue("[Channel2]", "hotcue_4_activate", false);
    }
  }
}

KorgKP3.pad1 = function (channel, control, value, status, group) {
  if(value>64){
    if(!KorgKP3.holdon){
      engine.setValue("[Channel1]", "keylock", true);
    } else {
      
    }
  } else {
    engine.setValue("[Channel1]", "keylock", false);
  }
}

KorgKP3.pad8 = function (channel, control, value, status, group) {
  if(value>64){
    if(!KorgKP3.holdon){
      engine.setValue("[Channel2]", "keylock", true);
    } else {
      
    }
  } else {
    engine.setValue("[Channel2]", "keylock", false);
  }
}


KorgKP3.shutdown = function () {};
KorgKP3.printError = function(exception){
	print("Mixxx has detected a mapping error. !");
	print("Error Msg: "+exception.toString());
};
