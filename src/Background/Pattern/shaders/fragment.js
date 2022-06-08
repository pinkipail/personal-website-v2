const fragment = `
// #extension GL_OES_standard_derivatives : enable
uniform sampler2D iTexture;      
uniform float iResolution;          
uniform float iScrollPos;          
uniform float iTime;          
uniform float iMouse;          

vec4 BS_A = vec4(3.0, -6.0, 0.0, 4.0) / 6.0;
vec4 BS_B = vec4(-1.0, 6.0,-12.0, 8.0) / 6.0;

vec4 powers(float x) { 
    return vec4(x*x*x, x*x, x, 1.0);
}

vec4 spline(float x, vec4 c0, vec4 c1, vec4 c2, vec4 c3) {
    vec4 result;
    result += c0*dot(BS_B, powers(x + 1.0));
    result += c1*dot(BS_A, powers(x));
    result += c2*dot(BS_A, powers(1.0 - x));
    result += c3*dot(BS_B, powers(2.0 - x));
    return result;
}

#define SAM(a,b) texture2D(iTexture, (i+vec2(a,b))/res)
vec4 texture_Bicubic(vec2 t) {
    vec2 res = vec2(512, 512);
    vec2 p = res*t;
    vec2 f = fract(p);
    vec2 i = floor(p);
    
    return spline(
        f.y,
        spline(f.x, SAM(-1,-1), SAM(0,-1), SAM(1,-1), SAM(2,-1)),
        spline(f.x, SAM(-1, 0), SAM(0, 0), SAM(1, 0), SAM(2, 0)),
        spline(f.x, SAM(-1, 1), SAM(0, 1), SAM(1, 1), SAM(2, 1)),
        spline(f.x, SAM(-1, 2), SAM(0, 2), SAM(1, 2), SAM(2, 2))
    );
}

float eval(vec2 uv, float time) {
    return cos(iTime * 0.05) + 11.0*texture_Bicubic(vec2(1., time) + uv).x;
}

float isoline(float val, float lg, float ref, float quantity, float thickness) {
    float v = abs(mod(val - ref + quantity * 0.5, quantity) - quantity * 0.5) / lg - thickness;
    return smoothstep(0.0,1.0, v);
}

void main() {
    float time = iScrollPos * 0.001;
    vec2 uv = gl_FragCoord.xy / iResolution * 0.0001;
    float val = eval(uv, time);
    float lg = 2.*length(vec2(dFdx(val), dFdy(val)));
    float ref = 1.0;
    
    float k1 = isoline(val, lg, ref, 1.0, 0.2);
    float k2 = isoline(val, lg, ref, 3.0, 0.7);
    float k3 = isoline(val, lg, ref, 6.0, 1.5);

    vec3 col = vec3(1.); 
    col *= k1 * k2 * k3;
    col = 1.0 - col;
    col *= vec3(130.0, 137.0, 143.0) / 255.0 * 0.6;

    gl_FragColor = vec4(col,1);
}
`;

export default fragment;
