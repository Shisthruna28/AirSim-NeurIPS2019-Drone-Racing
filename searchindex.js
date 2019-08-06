Search.setIndex({docnames:["index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,sphinx:54},filenames:["index.rst"],objects:{"airsimneurips.client":{MultirotorClient:[0,1,1,""]},"airsimneurips.client.MultirotorClient":{arm:[0,2,1,""],cancelLastTask:[0,2,1,""],client:[0,3,1,""],confirmConnection:[0,2,1,""],disableApiControl:[0,2,1,""],disarm:[0,2,1,""],enableApiControl:[0,2,1,""],getClientVersion:[0,2,1,""],getMinRequiredClientVersion:[0,2,1,""],getMinRequiredServerVersion:[0,2,1,""],getMultirotorState:[0,2,1,""],getServerVersion:[0,2,1,""],goHomeAsync:[0,2,1,""],hoverAsync:[0,2,1,""],isApiControlEnabled:[0,2,1,""],landAsync:[0,2,1,""],moveByAngleRatesThrottleAsync:[0,2,1,""],moveByAngleRatesZAsync:[0,2,1,""],moveByRollPitchYawThrottleAsync:[0,2,1,""],moveByRollPitchYawZAsync:[0,2,1,""],moveByRollPitchYawrateThrottleAsync:[0,2,1,""],moveByRollPitchYawrateZAsync:[0,2,1,""],moveByVelocityAsync:[0,2,1,""],moveByVelocityZAsync:[0,2,1,""],moveByYawRateAsync:[0,2,1,""],moveOnPathAsync:[0,2,1,""],moveOnSplineAsync:[0,2,1,""],moveOnSplineVelConstraintsAsync:[0,2,1,""],moveToPositionAsync:[0,2,1,""],moveToYawAsync:[0,2,1,""],moveToZAsync:[0,2,1,""],ping:[0,2,1,""],plot_transform:[0,2,1,""],reset:[0,2,1,""],setTrajectoryTrackerGains:[0,2,1,""],simContinueForTime:[0,2,1,""],simGetCameraInfo:[0,2,1,""],simGetCollisionInfo:[0,2,1,""],simGetGroundTruthKinematics:[0,2,1,""],simGetImage:[0,2,1,""],simGetImages:[0,2,1,""],simGetObjectPose:[0,2,1,""],simGetSegmentationObjectID:[0,2,1,""],simGetVehiclePose:[0,2,1,""],simIsPause:[0,2,1,""],simListSceneObjects:[0,2,1,""],simLoadLevel:[0,2,1,""],simPause:[0,2,1,""],simPrintLogMessage:[0,2,1,""],simSetCameraOrientation:[0,2,1,""],simSetObjectPose:[0,2,1,""],simSetSegmentationObjectID:[0,2,1,""],simSetVehiclePose:[0,2,1,""],takeoffAsync:[0,2,1,""],waitOnLastTask:[0,2,1,""]},"airsimneurips.types":{CameraInfo:[0,1,1,""],CollisionInfo:[0,1,1,""],DrivetrainType:[0,1,1,""],GeoPoint:[0,1,1,""],ImageRequest:[0,1,1,""],ImageResponse:[0,1,1,""],ImageType:[0,1,1,""],KinematicsState:[0,1,1,""],LandedState:[0,1,1,""],MsgpackMixin:[0,1,1,""],MultirotorState:[0,1,1,""],Pose:[0,1,1,""],ProjectionMatrix:[0,1,1,""],Quaternionr:[0,1,1,""],RCData:[0,1,1,""],TrajectoryTrackerGains:[0,1,1,""],Vector3r:[0,1,1,""],YawMode:[0,1,1,""]},"airsimneurips.types.CameraInfo":{fov:[0,3,1,""],pose:[0,3,1,""],proj_mat:[0,3,1,""]},"airsimneurips.types.CollisionInfo":{has_collided:[0,3,1,""],impact_point:[0,3,1,""],normal:[0,3,1,""],object_id:[0,3,1,""],object_name:[0,3,1,""],penetration_depth:[0,3,1,""],position:[0,3,1,""],time_stamp:[0,3,1,""]},"airsimneurips.types.DrivetrainType":{ForwardOnly:[0,3,1,""],MaxDegreeOfFreedom:[0,3,1,""]},"airsimneurips.types.GeoPoint":{altitude:[0,3,1,""],latitude:[0,3,1,""],longitude:[0,3,1,""]},"airsimneurips.types.ImageRequest":{camera_name:[0,3,1,""],compress:[0,3,1,""],image_type:[0,3,1,""],pixels_as_float:[0,3,1,""]},"airsimneurips.types.ImageResponse":{camera_orientation:[0,3,1,""],camera_position:[0,3,1,""],compress:[0,3,1,""],height:[0,3,1,""],image_data_float:[0,3,1,""],image_data_uint8:[0,3,1,""],image_type:[0,3,1,""],message:[0,3,1,""],pixels_as_float:[0,3,1,""],time_stamp:[0,3,1,""],width:[0,3,1,""]},"airsimneurips.types.ImageType":{DepthPerspective:[0,3,1,""],DepthPlanner:[0,3,1,""],DepthVis:[0,3,1,""],DisparityNormalized:[0,3,1,""],Infrared:[0,3,1,""],Scene:[0,3,1,""],Segmentation:[0,3,1,""],SurfaceNormals:[0,3,1,""]},"airsimneurips.types.KinematicsState":{angular_acceleration:[0,3,1,""],angular_velocity:[0,3,1,""],linear_acceleration:[0,3,1,""],linear_velocity:[0,3,1,""],orientation:[0,3,1,""],position:[0,3,1,""]},"airsimneurips.types.LandedState":{Flying:[0,3,1,""],Landed:[0,3,1,""]},"airsimneurips.types.MsgpackMixin":{from_msgpack:[0,4,1,""],to_msgpack:[0,2,1,""]},"airsimneurips.types.MultirotorState":{collision:[0,3,1,""],gps_location:[0,3,1,""],kinematics_estimated:[0,3,1,""],landed_state:[0,3,1,""],rc_data:[0,3,1,""],timestamp:[0,3,1,""]},"airsimneurips.types.Pose":{nanPose:[0,5,1,""],orientation:[0,3,1,""],position:[0,3,1,""]},"airsimneurips.types.ProjectionMatrix":{matrix:[0,3,1,""]},"airsimneurips.types.Quaternionr":{conjugate:[0,2,1,""],cross:[0,2,1,""],dot:[0,2,1,""],get_length:[0,2,1,""],inverse:[0,2,1,""],nanQuaternionr:[0,5,1,""],outer_product:[0,2,1,""],rotate:[0,2,1,""],sgn:[0,2,1,""],star:[0,2,1,""],to_numpy_array:[0,2,1,""],w_val:[0,3,1,""],x_val:[0,3,1,""],y_val:[0,3,1,""],z_val:[0,3,1,""]},"airsimneurips.types.RCData":{is_initialized:[0,3,1,""],is_valid:[0,3,1,""],pitch:[0,3,1,""],roll:[0,3,1,""],switch1:[0,3,1,""],switch2:[0,3,1,""],switch3:[0,3,1,""],switch4:[0,3,1,""],switch5:[0,3,1,""],switch6:[0,3,1,""],switch7:[0,3,1,""],switch8:[0,3,1,""],throttle:[0,3,1,""],timestamp:[0,3,1,""],yaw:[0,3,1,""]},"airsimneurips.types.TrajectoryTrackerGains":{kd_along_track:[0,3,1,""],kd_cross_track:[0,3,1,""],kd_vel_along_track:[0,3,1,""],kd_vel_cross_track:[0,3,1,""],kd_vel_z:[0,3,1,""],kd_yaw:[0,3,1,""],kd_z_track:[0,3,1,""],kp_along_track:[0,3,1,""],kp_cross_track:[0,3,1,""],kp_vel_along_track:[0,3,1,""],kp_vel_cross_track:[0,3,1,""],kp_vel_z:[0,3,1,""],kp_yaw:[0,3,1,""],kp_z_track:[0,3,1,""],to_list:[0,2,1,""]},"airsimneurips.types.Vector3r":{cross:[0,2,1,""],distance_to:[0,2,1,""],dot:[0,2,1,""],get_length:[0,2,1,""],nanVector3r:[0,5,1,""],to_Quaternionr:[0,2,1,""],to_numpy_array:[0,2,1,""],x_val:[0,3,1,""],y_val:[0,3,1,""],z_val:[0,3,1,""]},"airsimneurips.types.YawMode":{is_rate:[0,3,1,""],yaw_or_rate:[0,3,1,""]},"airsimneurips.utils":{get_pfm_array:[0,6,1,""],get_public_fields:[0,6,1,""],list_to_2d_float_array:[0,6,1,""],read_pfm:[0,6,1,""],string_to_float_array:[0,6,1,""],string_to_uint8_array:[0,6,1,""],to_dict:[0,6,1,""],to_eularian_angles:[0,6,1,""],to_quaternion:[0,6,1,""],to_str:[0,6,1,""],wait_key:[0,6,1,""],write_file:[0,6,1,""],write_pfm:[0,6,1,""],write_png:[0,6,1,""]},airsimneurips:{client:[0,0,0,"-"],types:[0,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:classmethod","5":"py:staticmethod","6":"py:function"},terms:{"case":0,"class":0,"default":0,"float":0,"function":[],"int":0,"return":0,"static":0,"true":0,"while":0,For:0,The:0,Uses:0,about:0,acc_max:0,acceler:0,adaptive_lookahead:0,add:0,add_curr_odom_position_constraint:0,add_curr_odom_velocity_constraint:0,ahead:0,airsim:0,all:0,alloc:0,allow:0,along:0,alreadi:0,also:0,altitud:0,alwai:0,amount:0,angl:0,angular:0,angular_acceler:0,angular_veloc:0,anticlockwis:0,api:0,appear:0,arg1:[],arg2:[],arg:0,arm:0,armdisarm:[],around:0,arrai:0,ask:0,asl:0,atan2:0,axi:0,backend:0,becaus:0,befor:0,behav:0,between:0,bodi:0,bool:0,bstr:0,call:0,camera:0,camera_nam:0,camera_orient:0,camera_posit:0,camerainfo:0,can:0,cancellasttask:0,car:0,caus:0,center:0,chang:0,channel:0,circl:0,classmethod:0,client:0,clockwis:0,collis:0,collisioninfo:0,com:0,command:0,competit:0,compress:0,confirmconnect:0,conjug:0,consol:0,constraint:0,contain:0,continu:0,contradict:0,control:0,convent:0,correspond:0,cross:0,current:0,custom:0,debug:0,defin:0,degre:0,depend:0,depthperspect:0,depthplann:0,depthvi:0,descript:0,desir:0,direct:0,disabl:0,disableapicontrol:0,disarm:0,disparitynorm:0,distance_to:0,document:0,don:0,dot:0,drivetrain:0,drivetraintyp:0,drone:0,durat:0,either:0,enabl:0,enableapicontrol:0,encod:0,equival:0,error:0,ethz:0,exampl:0,except:0,extend:[],fals:0,fashion:0,field:0,file:0,filenam:0,fit:0,fix:0,flst:0,flu:0,fly:0,follow:0,forwardonli:0,fov:0,fpv:0,frame:0,from_msgpack:0,front:0,funki:0,gain:0,game:0,geopoint:0,get:0,get_length:0,get_pfm_arrai:0,get_public_field:0,getclientvers:0,getminrequiredclientvers:0,getminrequiredserververs:0,getmultirotorst:0,getserververs:0,github:0,given:0,gohomeasync:0,gps_locat:0,handed:0,has_collid:0,have:0,height:0,henc:0,hoverasync:0,howev:0,http:0,ignore_collison:0,imag:0,image_data_float:0,image_data_uint8:0,image_typ:0,imagerequest:0,imagerespons:0,imagetyp:0,impact_point:0,index:0,infrar:0,instanc:0,interpret:0,invers:0,is_en:[],is_initi:0,is_name_regex:0,is_paus:0,is_rat:0,is_valid:0,isapicontrolen:0,its:0,jerk:0,just:0,kd_along_track:0,kd_cross_track:0,kd_vel_along_track:0,kd_vel_cross_track:0,kd_vel_z:0,kd_yaw:0,kd_z_track:0,keep:0,kei:0,kinematics_estim:0,kinematicsst:0,kp_along_track:0,kp_cross_track:0,kp_vel_along_track:0,kp_vel_cross_track:0,kp_vel_z:0,kp_yaw:0,kp_z_track:0,kwarg:0,land:0,landasync:0,landed_st:0,landedst:0,latitud:0,left:0,level:0,level_nam:0,like:0,line:[],linear:0,linear_acceler:0,linear_veloc:0,list:0,list_to_2d_float_arrai:0,load:0,local:0,longitud:0,look:0,lookahead:0,magnitud:0,mai:0,margin:0,matrix:0,mav_trajectory_gener:0,maxdegreeoffreedom:0,maximum:0,mean:0,measur:0,mesh_nam:0,messag:0,message_param:0,minimum:0,mode:0,modul:0,most:0,move:0,movebyangleratesthrottleasync:0,movebyanglerateszasync:0,movebyanglethrottleasync:[],movebyanglezasync:[],movebyrollpitchyawratethrottleasync:0,movebyrollpitchyawratezasync:0,movebyrollpitchyawthrottleasync:0,movebyrollpitchyawzasync:0,movebysplin:0,movebysplinevelconstraint:0,movebyvelocityasync:0,movebyvelocityzasync:0,movebyyawrateasync:0,moveonpathasync:0,moveonsplin:0,moveonsplineasync:0,moveonsplinevelconstraintsasync:0,movetopositionasync:0,movetoyawasync:0,movetozasync:0,msgpackmixin:0,multirotor:0,multirotorcli:0,multirotorst:0,must:0,name:0,name_regex:0,nanpos:0,nanquaternionr:0,nanvector3r:0,ned:0,neurip:0,norm:0,normal:0,note:0,numpi:0,obj:0,object:0,object_id:0,object_nam:0,odometri:0,onc:0,onli:0,option:0,orient:0,orientation_v:0,other:0,our:0,outer_product:0,packag:0,page:0,param:[],paramet:0,pass:0,path:0,paus:0,penetration_depth:0,per:0,perpendicular:0,pfm:0,ping:0,pitch:0,pitch_rat:0,pixels_as_float:0,plan:0,plane:0,plot:0,plot_transform:0,point:0,port:0,pose:0,pose_list:0,posit:0,position_v:0,press:0,proj_mat:0,projectionmatrix:0,pure:0,pursuit:0,python:0,quadrotor:0,quaternion:0,quaternionr:0,radian:0,rais:0,rate:0,rc_data:0,rcdata:0,read:0,read_pfm:0,refer:0,request:0,reset:0,respons:0,right:0,roll:0,roll_rat:0,rotat:0,rotatebyyawrateasync:[],rotatetoyawasync:[],sai:0,scale:0,scan:0,scene:0,search:[],sec:0,second:0,segment:0,send:0,set:0,settrajectorytrackergain:0,sever:0,sgn:0,shorthand:0,should:0,shouldn:0,sim:0,simcontinuefortim:0,simgetcamerainfo:0,simgetcollisioninfo:0,simgetgroundtruthkinemat:0,simgetimag:0,simgetobjectpos:0,simgetsegmentationobjectid:0,simgetvehiclepos:0,simispaus:0,simlistsceneobject:0,simloadlevel:0,simpaus:0,simprintlogmessag:0,simsetcameraorient:0,simsetobjectpos:0,simsetsegmentationobjectid:0,simsetvehiclepos:0,smooth:0,soint:0,some:0,specif:0,specifi:0,star:0,start:0,str:0,string:0,string_to_float_arrai:0,string_to_uint8_arrai:0,struct:0,stuff:0,success:0,summari:[],surfacenorm:0,switch1:0,switch2:0,switch3:0,switch4:0,switch5:0,switch6:0,switch7:0,switch8:0,takeoffasync:0,tangent:0,teleport:0,thi:0,throttl:0,time:0,time_stamp:0,timeout_sec:0,timeout_valu:0,timestamp:0,to_dict:0,to_eularian_angl:0,to_list:0,to_msgpack:0,to_numpy_arrai:0,to_quaternion:0,to_quaternionr:0,to_str:0,toward:0,track:0,tracker:0,trajectori:0,trajectorytrackergain:0,transform:0,translat:0,two:0,type:0,typeerror:0,uint64:0,unreal:0,upon:0,used:0,using:0,util:0,valu:0,valueerror:0,vector3r:0,vector:0,vehicl:0,vehicle_nam:0,vel_max:0,veloc:0,velocity_constraint:0,visual:0,viz_traj:0,w_val:0,wait:0,wait_kei:0,waitonlasttask:0,want:0,waypoint:0,when:0,which:0,width:0,window:0,world:0,would:0,write:0,write_fil:0,write_pfm:0,write_png:0,wrt:0,x_val:0,y_val:0,yaw:0,yaw_mod:0,yaw_or_r:0,yaw_rat:0,yawmod:0,you:0,z_val:0},titles:["airsimneurips"],titleterms:{airsimneurip:0,document:[],index:[],indic:[],tabl:[]}})