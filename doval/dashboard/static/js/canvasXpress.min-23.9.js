/**
 * CanvasXpress 23.9 - JavaScript Canvas Library
 * 
 * Copyright (c) 2009-2019 Isaac Neuhaus
 * 
 * imnphd@gmail.com
 * 
 * 
 * Redistributions of this source code must retain this copyright notice and the following disclaimer.
 * 
 * CanvasXpress is licensed under the terms of the Open Source GPL version 3.0 license.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 * 
 * Please see a copy of the GNU General Public License at http://www.gnu.org/licenses.
 * 
 * Commercial use may be granted to the extent that this source code does NOT become part of any other Open Source or Commercially licensed development library or toolkit without explicit permission.
 * Please contact me for additional information.
 * 
 * Thanks to Mingyi Liu for his contributions with the network graphs and Charles Tilford for his input to the Genome Browser.
 * 
 */
/**
 * 
 * canvas.text.js
 * @projectDescription An cross-browser implementation of the HTML5 <canvas> text methods 
 * @author Fabien M�nager 
 * @version $Revision: 1.4 $ 
 * @license MIT License <http://www.opensource.org/licenses/mit-license.php> 
 * 
 * Known issues: 
 * - The 'light' font weight is not supported, neither is the 'oblique' font style. 
 * - Optimize the different hacks (for Opera9) 
 * 
 ****
 *
 * HeyGraph by Tom Martin
 * 
 * Copyright (c) 2010 Tom Martin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 ****
 * 
 * sprintf() for JavaScript v.0.4
 *
 * Copyright (c) 2007 Alexandru Marasteanu <http://alexei.417.ro/>
 * Thanks to David Baird (unit test and patch).
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 59 Temple
 * Place, Suite 330, Boston, MA 02111-1307 USA
 *
 ***
 * 
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 *
 ****
 *
 * canvas_wrapper.js
 * Canvas doesn't support getCoords() which I really need....
 * So I made a wrapper, code mostly taken from excanvas.js by Google - http://code.google.com/p/explorercanvas/
 * alias some functions to make (compiled) code shorter
 *
 ****
 *
 * conrec.js
 * Copyright (c) 2010, Jason Davies.
 *
 * All rights reserved.  This code is based on Bradley White's Java version,
 * which is in turn based on Nicholas Yue's C++ version, which in turn is based
 * on Paul D. Bourke's original Fortran version.  See below for the respective
 * copyright notices.
 *
 * See http://paulbourke.net/papers/conrec for the original
 * paper by Paul D. Bourke.
 *
 * The vector conversion code is based on http://apptree.net/conrec.htm by
 * Graham Cox.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 ****
 *
 * conrec.js
 * Copyright (c) 1996-1997 Nicholas Yue
 *
 * This software is copyrighted by Nicholas Yue. This code is based on Paul D.
 * Bourke's CONREC.F routine.
 *
 * The authors hereby grant permission to use, copy, and distribute this
 * software and its documentation for any purpose, provided that existing
 * copyright notices are retained in all copies and that this notice is
 * included verbatim in any distributions. Additionally, the authors grant
 * permission to modify this software and its documentation for any purpose,
 * provided that such modifications are not distributed without the explicit
 * consent of the authors and that existing copyright notices are retained in
 * all copies. Some of the algorithms implemented by this software are
 * patented, observe all applicable patent law.
 *
 * IN NO EVENT SHALL THE AUTHORS OR DISTRIBUTORS BE LIABLE TO ANY PARTY FOR
 * DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT
 * OF THE USE OF THIS SOFTWARE, ITS DOCUMENTATION, OR ANY DERIVATIVES THEREOF,
 * EVEN IF THE AUTHORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * THE AUTHORS AND DISTRIBUTORS SPECIFICALLY DISCLAIM ANY WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.  THIS SOFTWARE IS
 * PROVIDED ON AN "AS IS" BASIS, AND THE AUTHORS AND DISTRIBUTORS HAVE NO
 * OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR
 * MODIFICATIONS.
 * 
 **** 
 *
 * jLouvain.js
 * Author: Corneliu S. (github.com/upphiminn)
 * This is a javascript implementation of the Louvain
 * community detection algorithm (http://arxiv.org/abs/0803.0476)
 * Based on https://bitbucket.org/taynaud/python-louvain/overview
 * 
 ****
 * 
 * science.js
 * Copyright (c) 2011, Jason Davies
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * The name Jason Davies may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL JASON DAVIES BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 ****
 *
 * Apache-Style Software License for ColorBrewer software and ColorBrewer Color
 * Schemes
 * 
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The Pennsylvania State
 * University.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions as source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * 2. The end-user documentation included with the redistribution, if any, must
 * include the following acknowledgment: "This product includes color
 * specifications and designs developed by Cynthia Brewer
 * (http://colorbrewer.org/)." Alternately, this acknowledgment may appear in the
 * software itself, if and wherever such third-party acknowledgments normally
 * appear.
 * 
 * 4. The name "ColorBrewer" must not be used to endorse or promote products
 * derived from this software without prior written permission. For written
 * permission, please contact Cynthia Brewer at cbrewer@psu.edu.
 * 
 * 5. Products derived from this software may not be called "ColorBrewer", nor
 * may "ColorBrewer" appear in their name, without prior written permission of
 * Cynthia Brewer.
 *
 ****
 * 
 * FileSaver.js
 * Copyright © 2015 [Eli Grey][1].
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 **** 
 * 
 * canvas-toBlob.js
 * Copyright © 2011 Eli Grey and Devin Samarin.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 ****
 *
 * Blob.js
 * Copyright © 2014 Eli Grey.
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 ****
 *
 * jstat.js
 * Copyright (c) 2013 jStat
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 ****
 *
 * numeric.js
 * Numeric Javascript
 * Copyright (C) 2011 by Sébastien Loisel
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 ****
 *
 * spark-md5.js
 * Copyright (c) 2015 André Cruz <amdfcruz@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 ****
 *
 * Sankey.js
 * Copyright (c) 2012, Michael Bostock
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * The name Michael Bostock may not be used to endorse or promote products
 *   derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL MICHAEL BOSTOCK BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 ****
 *
 * canvas2svg
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Gliffy Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 ****
 *
 * genie.js
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Kamil Pekala (kamilkp@gmail.com)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
function str_repeat(b,a){for(var c=[];a>0;c[--a]=b){}return(c.join(""))}function sprintf(){var g=0,e,h=arguments[g++],k=[],d,j,l,b;while(h){if(d=/^[^\x25]+/.exec(h)){k.push(d[0])}else{if(d=/^\x25{2}/.exec(h)){k.push("%")}else{if(d=/^\x25(?:(\d+)\$)?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gosuxX])/.exec(h)){if(((e=arguments[d[1]||g++])==null)||(e==undefined)){throw ("Too few arguments.")}if(/[^s]/.test(d[7])&&(typeof(e)!="number")){throw ("Expecting number but found "+typeof(e))}switch(d[7]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e);break;case"e":e=d[6]?e.toExponential(d[6]):e.toExponential();break;case"f":e=d[6]?parseFloat(e).toFixed(d[6]):parseFloat(e);break;case"g":e=d[6]?String(Number(e).toPrecision(d[6])):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=((e=String(e))&&d[6]?e.substring(0,d[6]):e);break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase();break}e=(/[def]/.test(d[7])&&d[2]&&e>0?"+"+e:e);l=d[3]?d[3]=="0"?"0":d[3].charAt(1):" ";b=d[5]-String(e).length;j=d[5]?str_repeat(l,b):"";k.push(d[4]?e+j:j+e)}else{throw ("Huh ?!")}}}h=h.substring(d[0].length)}return k.join("")};var dateFormat=function(){var a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,b=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,d=/[^-+\dA-Z]/g,c=function(f,e){f=String(f);e=e||2;while(f.length<e){f="0"+f}return f};return function(i,v,q){var g=dateFormat;if(arguments.length==1&&Object.prototype.toString.call(i)=="[object String]"&&!/\d/.test(i)){v=i;i=undefined}i=i?new Date(i):new Date;if(isNaN(i)){throw SyntaxError("invalid date")}v=String(g.masks[v]||v||g.masks["default"]);if(v.slice(0,4)=="UTC:"){v=v.slice(4);q=true}var t=q?"getUTC":"get",l=i[t+"Date"](),e=i[t+"Day"](),j=i[t+"Month"](),p=i[t+"FullYear"](),r=i[t+"Hours"](),k=i[t+"Minutes"](),u=i[t+"Seconds"](),n=i[t+"Milliseconds"](),f=q?0:i.getTimezoneOffset(),h={d:l,dd:c(l),ddd:g.i18n.dayNames[e],dddd:g.i18n.dayNames[e+7],m:j+1,mm:c(j+1),mmm:g.i18n.monthNames[j],mmmm:g.i18n.monthNames[j+12],yy:String(p).slice(2),yyyy:p,h:r%12||12,hh:c(r%12||12),H:r,HH:c(r),M:k,MM:c(k),s:u,ss:c(u),l:c(n,3),L:c(n>99?Math.round(n/10):n),t:r<12?"a":"p",tt:r<12?"am":"pm",T:r<12?"A":"P",TT:r<12?"AM":"PM",Z:q?"UTC":(String(i).match(b)||[""]).pop().replace(d,""),o:(f>0?"-":"+")+c(Math.floor(Math.abs(f)/60)*100+Math.abs(f)%60,4),S:["th","st","nd","rd"][l%10>3?0:(l%100-l%10!=10)*l%10]};return v.replace(a,function(m){return m in h?h[m]:m.slice(1,m.length-1)})}}();dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};Date.prototype.format=function(a,b){return dateFormat(this,a,b)};var Conrec=(function(){var d=1e-20;var c=function(h,g){var f=h.x-g.x,i=h.y-g.y;return f*f+i*i<d};var e=function(h){var f=h.head;while(f){var g=f.next;f.next=f.prev;f.prev=g;f=g}var g=h.head;h.head=h.tail;h.tail=g};var b=function(f){this.level=f;this.s=null;this.count=0};b.prototype.remove_seq=function(f){if(f.prev){f.prev.next=f.next}else{this.s=f.next}if(f.next){f.next.prev=f.prev}--this.count};b.prototype.addSegment=function(k,j){var p=this.s;var m=null;var l=null;var o=false;var n=false;while(p){if(m==null){if(c(k,p.head.p)){m=p;o=true}else{if(c(k,p.tail.p)){m=p}}}if(l==null){if(c(j,p.head.p)){l=p;n=true}else{if(c(j,p.tail.p)){l=p}}}if(l!=null&&m!=null){break}else{p=p.next}}var i=((m!=null)?1:0)|((l!=null)?2:0);switch(i){case 0:var f={p:k,prev:null};var h={p:j,next:null};f.next=h;h.prev=f;m={head:f,tail:h,next:this.s,prev:null,closed:false};if(this.s){this.s.prev=m}this.s=m;++this.count;break;case 1:var g={p:j};if(o){g.next=m.head;g.prev=null;m.head.prev=g;m.head=g}else{g.next=null;g.prev=m.tail;m.tail.next=g;m.tail=g}break;case 2:var g={p:k};if(n){g.next=l.head;g.prev=null;l.head.prev=g;l.head=g}else{g.next=null;g.prev=l.tail;l.tail.next=g;l.tail=g}break;case 3:if(m===l){var g={p:m.tail.p,next:m.head,prev:null};m.head.prev=g;m.head=g;m.closed=true;break}switch((o?1:0)|(n?2:0)){case 0:e(m);case 1:l.tail.next=m.head;m.head.prev=l.tail;l.tail=m.tail;this.remove_seq(m);break;case 3:e(m);case 2:m.tail.next=l.head;l.head.prev=m.tail;m.tail=l.tail;this.remove_seq(l);break}}};var a=function(f){if(!f){var g=this;g.contours={};this.drawContour=function(j,i,o,n,m,l){var h=g.contours[l];if(!h){h=g.contours[l]=new b(m)}h.addSegment({x:j,y:i},{x:o,y:n})};this.contourList=function(){var m=[];var j=g.contours;for(var n in j){var p=j[n].s;var q=j[n].level;while(p){var o=p.head;var i=[];i.level=q;i.k=n;while(o&&o.p){i.push(o.p);o=o.next}m.push(i);p=p.next}}m.sort(function(k,h){return h.k-k.k});return m}}else{this.drawContour=f}this.h=new Array(5);this.sh=new Array(5);this.xh=new Array(5);this.yh=new Array(5)};a.prototype.contour=function(Q,L,P,r,u,B,A,t,v){var N=this.h,S=this.sh,D=this.xh,U=this.yh;var H=this.drawContour;this.contours={};var q=function(i,h){return(N[h]*D[i]-N[i]*D[h])/(N[h]-N[i])};var R=function(i,h){return(N[h]*U[i]-N[i]*U[h])/(N[h]-N[i])};var l;var g;var f;var s;var C;var E;var O=0;var M=0;var o=0;var n=0;var w=[0,1,1,0];var K=[0,0,1,1];var p=[[[0,0,8],[0,2,5],[7,6,9]],[[0,3,4],[1,3,1],[4,3,0]],[[9,6,7],[5,2,0],[8,0,0]]];for(var I=(u-1);I>=r;I--){for(var J=L;J<=P-1;J++){var V,T;V=Math.min(Q[J][I],Q[J][I+1]);T=Math.min(Q[J+1][I],Q[J+1][I+1]);C=Math.min(V,T);V=Math.max(Q[J][I],Q[J][I+1]);T=Math.max(Q[J+1][I],Q[J+1][I+1]);E=Math.max(V,T);if(E>=v[0]&&C<=v[t-1]){for(var G=0;G<t;G++){if(v[G]>=C&&v[G]<=E){for(var F=4;F>=0;F--){if(F>0){N[F]=Q[J+w[F-1]][I+K[F-1]]-v[G];D[F]=B[J+w[F-1]];U[F]=A[I+K[F-1]]}else{N[0]=0.25*(N[1]+N[2]+N[3]+N[4]);D[0]=0.5*(B[J]+B[J+1]);U[0]=0.5*(A[I]+A[I+1])}if(N[F]>0){S[F]=1}else{if(N[F]<0){S[F]=-1}else{S[F]=0}}}for(F=1;F<=4;F++){l=F;g=0;if(F!=4){f=F+1}else{f=1}s=p[S[l]+1][S[g]+1][S[f]+1];if(s!=0){switch(s){case 1:O=D[l];o=U[l];M=D[g];n=U[g];break;case 2:O=D[g];o=U[g];M=D[f];n=U[f];break;case 3:O=D[f];o=U[f];M=D[l];n=U[l];break;case 4:O=D[l];o=U[l];M=q(g,f);n=R(g,f);break;case 5:O=D[g];o=U[g];M=q(f,l);n=R(f,l);break;case 6:O=D[f];o=U[f];M=q(l,g);n=R(l,g);break;case 7:O=q(l,g);o=R(l,g);M=q(g,f);n=R(g,f);break;case 8:O=q(g,f);o=R(g,f);M=q(f,l);n=R(f,l);break;case 9:O=q(f,l);o=R(f,l);M=q(l,g);n=R(l,g);break;default:break}H(O,o,M,n,v[G],G)}}}}}}}};return a})();if(typeof exports!=="undefined"){exports.Conrec=Conrec};(function(){jLouvain=function(){var l=-1;var k=1e-7;var i;var y;var s={};var a;function d(C){var B={};C.forEach(function(E,D){B[E]=true});return Object.keys(B)}function x(D){var C=[];for(var B in D){if(D.hasOwnProperty(B)){C.push(D[B])}}return C}function v(E,C){var B=E._assoc_mat[C]?Object.keys(E._assoc_mat[C]):[];var D=0;B.forEach(function(F,G){var H=E._assoc_mat[C][F]||1;if(C==F){H*=2}D+=H});return D}function f(D,C){if(typeof D._assoc_mat[C]=="undefined"){return[]}var B=Object.keys(D._assoc_mat[C]);return B}function g(D,C,B){return D._assoc_mat[C]?D._assoc_mat[C][B]:undefined}function A(C){var B=0;C.edges.forEach(function(D){B+=D.weight});return B}function c(D,C){e(D,C);var B=D.edges.map(function(E){return E.id1+"_"+E.id2}).indexOf(C.id1+"_"+C.id2);if(B!=-1){D.edges[B].weight=C.weight}else{D.edges.push(C)}}function z(B){var C={};B.forEach(function(E,D){E.weight=E.weight||1;C[E.id1]=C[E.id1]||{};C[E.id1][E.id2]=E.weight;C[E.id2]=C[E.id2]||{};C[E.id2][E.id1]=E.weight});return C}function e(C,B){C._assoc_mat[B.id1]=C._assoc_mat[B.id1]||{};C._assoc_mat[B.id1][B.id2]=B.weight;C._assoc_mat[B.id2]=C._assoc_mat[B.id2]||{};C._assoc_mat[B.id2][B.id1]=B.weight}function t(D){if(D==null||typeof(D)!="object"){return D}var B=D.constructor();for(var C in D){B[C]=t(D[C])}return B}function p(D,B,C){B.nodes_to_com={};B.total_weight=0;B.internals={};B.degrees={};B.gdegrees={};B.loops={};B.total_weight=A(D);if(typeof C=="undefined"){D.nodes.forEach(function(G,E){B.nodes_to_com[G]=E;var F=v(D,G);if(F<0){throw"Bad graph type, use positive weights!"}B.degrees[E]=F;B.gdegrees[G]=F;B.loops[G]=g(D,G,G)||0;B.internals[E]=B.loops[G]})}else{D.nodes.forEach(function(I,G){var E=C[I];B.nodes_to_com[I]=E;var H=v(D,I);B.degrees[E]=(B.degrees[E]||0)+H;B.gdegrees[I]=H;var J=0;var F=f(D,I);F.forEach(function(K,L){var M=D._assoc_mat[I][K];if(M<=0){throw"Bad graph type, use positive weights"}if(C[K]==E){if(K==I){J+=M}else{J+=M/2}}});B.internals[E]=(B.internals[E]||0)+J})}}function o(C){var E=C.total_weight;var B=0;var D=d(x(C.nodes_to_com));D.forEach(function(F,G){var I=C.internals[F]||0;var H=C.degrees[F]||0;if(E>0){B=B+I/E-Math.pow((H/(2*E)),2)}});return B}function m(D,E,B){var C={};var F=f(E,D);F.forEach(function(G,H){if(G!=D){var I=E._assoc_mat[D][G]||1;var J=B.nodes_to_com[G];C[J]=(C[J]||0)+I}});return C}function u(D,C,E,B){B.nodes_to_com[D]=+C;B.degrees[C]=(B.degrees[C]||0)+(B.gdegrees[D]||0);B.internals[C]=(B.internals[C]||0)+E+(B.loops[D]||0)}function r(D,C,E,B){B.degrees[C]=((B.degrees[C]||0)-(B.gdegrees[D]||0));B.internals[C]=((B.internals[C]||0)-E-(B.loops[D]||0));B.nodes_to_com[D]=-1}function j(F){var D=0;var B=t(F);var C={};var E=Object.keys(F);E.forEach(function(H){var I=F[H];var G=typeof C[I]=="undefined"?-1:C[I];if(G==-1){C[I]=D;G=D;D=D+1}B[H]=G});return B}function b(F,B){var D=true,G=0,E=o(B),C=E;while(D&&G!=l){E=C;D=false;G+=1;F.nodes.forEach(function(J,I){var M=B.nodes_to_com[J];var O=(B.gdegrees[J]||0)/(B.total_weight*2);var L=m(J,F,B);r(J,M,(L[M]||0),B);var N=M;var H=0;var K=Object.keys(L);K.forEach(function(P,Q){var R=L[P]-(B.degrees[P]||0)*O;if(R>H){H=R;N=P}});u(J,N,L[N]||0,B);if(N!=M){D=true}});C=o(B);if(C-E<k){break}}}function h(C,G){var B={nodes:[],edges:[],_assoc_mat:{}};var D,F;var E=x(C);B.nodes=B.nodes.concat(d(E));G.edges.forEach(function(I,H){F=I.weight||1;var L=C[I.id1];var J=C[I.id2];D=(g(B,L,J)||0);var K=(D+F);c(B,{source:L,target:J,weight:K})});return B}function w(C,E){var B=t(C[0]);for(var D=1;D<E+1;D++){Object.keys(B).forEach(function(H,G){var I=H;var F=B[H];B[I]=C[D][F]})}return B}function n(J,D){if(J.edges.length==0){var C={};J.nodes.forEach(function(L,K){C[L]=L});return C}var F={};p(s,F,D);var H=o(F);var I=[];b(s,F);var B=o(F);var G=j(F.nodes_to_com);I.push(G);H=B;var E=h(G,s);p(E,F);while(true){b(E,F);B=o(F);if(B-H<k){break}G=j(F.nodes_to_com);I.push(G);H=B;E=h(G,E);p(E,F)}return I}var q=function(){var B={};var C=n(s,a);return w(C,C.length-1)};q.nodes=function(B){if(arguments.length>0){i=B}return q};q.edges=function(C){if(typeof i=="undefined"){throw"Please provide the graph nodes first!"}if(arguments.length>0){y=C;var B=z(C);s={nodes:i,edges:y,_assoc_mat:B}}return q};q.partition_init=function(B){if(arguments.length>0){a=B}return q};return q}})();/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
(function(a){a.URL=a.URL||a.webkitURL;if(a.Blob&&a.URL){try{new Blob;return}catch(d){}}var c=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||(function(p){var g=function(z){return Object.prototype.toString.call(z).match(/^\[object\s(.*)\]$/)[1]},y=function m(){this.data=[]},w=function i(B,z,A){this.data=B;this.size=B.length;this.type=z;this.encoding=A},q=y.prototype,v=w.prototype,s=p.FileReaderSync,e=function(z){this.code=this[this.name=z]},r=("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),u=r.length,l=p.URL||p.webkitURL||p,t=l.createObjectURL,f=l.revokeObjectURL,k=l,o=p.btoa,j=p.atob,h=p.ArrayBuffer,n=p.Uint8Array,x=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;w.fake=v.fake=true;while(u--){e.prototype[r[u]]=u+1}if(!l.createObjectURL){k=p.URL=function(A){var z=document.createElementNS("http://www.w3.org/1999/xhtml","a"),B;z.href=A;if(!("origin" in z)){if(z.protocol.toLowerCase()==="data:"){z.origin=null}else{B=A.match(x);z.origin=B&&B[1]}}return z}}k.createObjectURL=function(A){var B=A.type,z;if(B===null){B="application/octet-stream"}if(A instanceof w){z="data:"+B;if(A.encoding==="base64"){return z+";base64,"+A.data}else{if(A.encoding==="URI"){return z+","+decodeURIComponent(A.data)}}if(o){return z+";base64,"+o(A.data)}else{return z+","+encodeURIComponent(A.data)}}else{if(t){return t.call(l,A)}}};k.revokeObjectURL=function(z){if(z.substring(0,5)!=="data:"&&f){f.call(l,z)}};q.append=function(D){var F=this.data;if(n&&(D instanceof h||D instanceof n)){var E="",A=new n(D),B=0,C=A.length;for(;B<C;B++){E+=String.fromCharCode(A[B])}F.push(E)}else{if(g(D)==="Blob"||g(D)==="File"){if(s){var z=new s;F.push(z.readAsBinaryString(D))}else{throw new e("NOT_READABLE_ERR")}}else{if(D instanceof w){if(D.encoding==="base64"&&j){F.push(j(D.data))}else{if(D.encoding==="URI"){F.push(decodeURIComponent(D.data))}else{if(D.encoding==="raw"){F.push(D.data)}}}}else{if(typeof D!=="string"){D+=""}F.push(unescape(encodeURIComponent(D)))}}}};q.getBlob=function(z){if(!arguments.length){z=null}return new w(this.data.join(""),z,"raw")};q.toString=function(){return"[object BlobBuilder]"};v.slice=function(C,z,B){var A=arguments.length;if(A<3){B=null}return new w(this.data.slice(C,A>1?z:this.data.length),B,this.encoding)};v.toString=function(){return"[object Blob]"};v.close=function(){this.size=0;delete this.data};return y}(a));a.Blob=function(j,h){var l=h?(h.type||""):"";var g=new c();if(j){for(var k=0,e=j.length;k<e;k++){if(Uint8Array&&j[k] instanceof Uint8Array){g.append(j[k].buffer)}else{g.append(j[k])}}}var f=g.getBlob(l);if(!f.slice&&f.webkitSlice){f.slice=f.webkitSlice}return f};var b=Object.getPrototypeOf||function(e){return e.__proto__};a.Blob.prototype=b(new a.Blob())}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this));
/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */
(function(a){var b=a.Uint8Array,d=a.HTMLCanvasElement,c=d&&d.prototype,e=/\s*;\s*base64\s*(?:;|$)/i,f="toDataURL",h,g=function(p){var q=p.length,m=new b(q/4*3|0),o=0,s=0,t=[0,0],j=0,r=0,n,k,l;while(q--){k=p.charCodeAt(o++);n=h[k-43];if(n!==255&&n!==l){t[1]=t[0];t[0]=k;r=(r<<6)|n;j++;if(j===4){m[s++]=r>>>16;if(t[1]!==61){m[s++]=r>>>8}if(t[0]!==61){m[s++]=r}j=0}}}return m};if(b){h=new b([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])}if(d&&(!c.toBlob||!c.toBlobHD)){if(!c.toBlob){c.toBlob=function(p,n){if(!n){n="image/png"}if(this.mozGetAsFile){p(this.mozGetAsFile("canvas",n));return}if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(n)){p(this.msToBlob());return}var m=Array.prototype.slice.call(arguments,1),k=this[f].apply(this,m),j=k.indexOf(","),o=k.substring(j+1),i=e.test(k.substring(0,j)),l;if(Blob.fake){l=new Blob;if(i){l.encoding="base64"}else{l.encoding="URI"}l.data=o;l.size=o.length}else{if(b){if(i){l=new Blob([g(o)],{type:n})}else{l=new Blob([decodeURIComponent(o)],{type:n})}}}p(l)}}if(!c.toBlobHD&&c.toDataURLHD){c.toBlobHD=function(){f="toDataURLHD";var i=this.toBlob();f="toDataURL";return i}}else{c.toBlobHD=c.toBlob}}}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content||this));var _global=typeof window==="object"&&window.window===window?window:typeof self==="object"&&self.self===self?self:typeof global==="object"&&global.global===global?global:this;function bom(a,b){if(typeof b==="undefined"){b={autoBom:false}}else{if(typeof b!=="object"){console.warn("Depricated: Expected third argument to be a object");b={autoBom:!b}}}if(b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)){return new Blob([String.fromCharCode(65279),a],{type:a.type})}return a}function download(b,a,c){var d=new XMLHttpRequest();d.open("GET",b);d.responseType="blob";d.onload=function(){saveAs(d.response,a,c)};d.onerror=function(){console.error("could not download file")};d.send()}function corsEnabled(a){var b=new XMLHttpRequest();b.open("HEAD",a,false);b.send();return b.status>=200&&b.status<=299}function click(b){try{b.dispatchEvent(new MouseEvent("click"))}catch(c){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",true,true,window,0,0,0,80,20,false,false,false,false,0,null);b.dispatchEvent(a)}}var saveAs=_global.saveAs||(typeof window!=="object"||window!==_global)?function saveAs(){}:"download" in HTMLAnchorElement.prototype?function saveAs(d,e,f){var b=_global.URL||_global.webkitURL;var c=document.createElement("a");e=e||d.name||"download";c.download=e;c.rel="noopener";if(typeof d==="string"){c.href=d;if(c.origin!==location.origin){corsEnabled(c.href)?download(d,e,f):click(c,c.target="_blank")}else{click(c)}}else{c.href=b.createObjectURL(d);setTimeout(function(){b.revokeObjectURL(c.href)},40000);setTimeout(function(){click(c)},0)}}:"msSaveOrOpenBlob" in navigator?function saveAs(c,d,e){d=d||c.name||"download";if(typeof c==="string"){if(corsEnabled(c)){download(c,d,e)}else{var b=document.createElement("a");b.href=c;b.target="_blank";setTimeout(function(){click(b)})}}else{navigator.msSaveOrOpenBlob(bom(c,e),d)}}:function saveAs(b,d,a,e){e=e||open("","_blank");if(e){e.document.title=e.document.body.innerText="downloading..."}if(typeof b==="string"){return download(b,d,a)}var f=b.type==="application/octet-stream";var i=/constructor/i.test(_global.HTMLElement)||_global.safari;var j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||(f&&i))&&typeof FileReader==="object"){var g=new FileReader();g.onloadend=function(){var k=g.result;k=j?k:k.replace(/^data:[^;]*;/,"data:attachment/file;");if(e){e.location.href=k}else{location=k}e=null};g.readAsDataURL(b)}else{var h=_global.URL||_global.webkitURL;var c=h.createObjectURL(b);if(e){e.location=c}else{location.href=c}e=null;setTimeout(function(){h.revokeObjectURL(c)},40000)}};_global.saveAs=saveAs.saveAs=saveAs;if(typeof module!=="undefined"){module.exports=saveAs};"use strict";var numeric=(typeof exports==="undefined")?(function numeric(){}):(exports);if(typeof global!=="undefined"){global.numeric=numeric}numeric.version="1.2.6";numeric._myIndexOf=(function _myIndexOf(a){var c=this.length,b;for(b=0;b<c;++b){if(this[b]===a){return b}}return -1});numeric.myIndexOf=(Array.prototype.indexOf)?Array.prototype.indexOf:numeric._myIndexOf;numeric.Function=Function;numeric.precision=4;numeric.largeArray=50;numeric._dim=function _dim(a){var b=[];while(typeof a==="object"){b.push(a.length);a=a[0]}return b};numeric.dim=function dim(a){var c,b;if(typeof a==="object"){c=a[0];if(typeof c==="object"){b=c[0];if(typeof b==="object"){return numeric._dim(a)}return[a.length,c.length]}return[a.length]}return[]};numeric.mapreduce=function mapreduce(a,b){return Function("x","accum","_s","_k",'if(typeof accum === "undefined") accum = '+b+';\nif(typeof x === "number") { var xi = x; '+a+'; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    '+a+";\n    xi = x[i-1];\n    "+a+";\n}\nif(i === 0) {\n    xi = x[i];\n    "+a+"\n}\nreturn accum;")};numeric.mapreduce2=function mapreduce2(b,a){return Function("x","var n = x.length;\nvar i,xi;\n"+a+";\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    "+b+";\n}\nreturn accum;")};numeric.same=function same(a,d){var b,c;if(!(a instanceof Array)||!(d instanceof Array)){return false}c=a.length;if(c!==d.length){return false}for(b=0;b<c;b++){if(a[b]===d[b]){continue}if(typeof a[b]==="object"){if(!same(a[b],d[b])){return false}}else{return false}}return true};numeric.rep=function rep(e,b,a){if(typeof a==="undefined"){a=0}var f=e[a],c=Array(f),d;if(a===e.length-1){for(d=f-2;d>=0;d-=2){c[d+1]=b;c[d]=b}if(d===-1){c[0]=b}return c}for(d=f-1;d>=0;d--){c[d]=numeric.rep(e,b,a+1)}return c};numeric.dotMMsmall=function dotMMsmall(v,u){var l,g,e,c,b,a,n,s,m,h,f,o,w,d;c=v.length;b=u.length;a=u[0].length;n=Array(c);for(l=c-1;l>=0;l--){s=Array(a);m=v[l];for(e=a-1;e>=0;e--){h=m[b-1]*u[b-1][e];for(g=b-2;g>=1;g-=2){f=g-1;h+=m[g]*u[g][e]+m[f]*u[f][e]}if(g===0){h+=m[0]*u[0][e]}s[e]=h}n[l]=s}return n};numeric._getCol=function _getCol(b,c,a){var e=b.length,d;for(d=e-1;d>0;--d){a[d]=b[d][c];--d;a[d]=b[d][c]}if(d===0){a[0]=b[0][c]}};numeric.dotMMbig=function dotMMbig(r,q){var s=numeric._getCol,a=q.length,u=Array(a);var d=r.length,c=q[0].length,b=new Array(d),l;var f=numeric.dotVV;var h,g,e,o;--a;--d;for(h=d;h!==-1;--h){b[h]=Array(c)}--c;for(h=c;h!==-1;--h){s(q,h,u);for(g=d;g!==-1;--g){o=0;l=r[g];b[g][h]=f(l,u)}}return b};numeric.dotMV=function dotMV(a,g){var e=a.length,d=g.length,c;var b=Array(e),f=numeric.dotVV;for(c=e-1;c>=0;c--){b[c]=f(a[c],g)}return b};numeric.dotVM=function dotVM(h,g){var w,v,u,n,m,l,D,B,A,e,s,f,c,z,d,b,a,o,C;n=h.length;m=g[0].length;D=Array(m);for(u=m-1;u>=0;u--){e=h[n-1]*g[n-1][u];for(v=n-2;v>=1;v-=2){s=v-1;e+=h[v]*g[v][u]+h[s]*g[s][u]}if(v===0){e+=h[0]*g[0][u]}D[u]=e}return D};numeric.dotVV=function dotVV(a,f){var c,e=a.length,d,b=a[e-1]*f[e-1];for(c=e-2;c>=1;c-=2){d=c-1;b+=a[c]*f[c]+a[d]*f[d]}if(c===0){b+=a[0]*f[0]}return b};numeric.dot=function dot(a,c){var b=numeric.dim;switch(b(a).length*1000+b(c).length){case 2002:if(c.length<10){return numeric.dotMMsmall(a,c)}else{return numeric.dotMMbig(a,c)}case 2001:return numeric.dotMV(a,c);case 1002:return numeric.dotVM(a,c);case 1001:return numeric.dotVV(a,c);case 1000:return numeric.mulVS(a,c);case 1:return numeric.mulSV(a,c);case 0:return a*c;default:throw new Error("numeric.dot only works on vectors and matrices")}};numeric.diag=function diag(g){var e,f,c,h=g.length,a=Array(h),b;for(e=h-1;e>=0;e--){b=Array(h);f=e+2;for(c=h-1;c>=f;c-=2){b[c]=0;b[c-1]=0}if(c>e){b[c]=0}b[e]=g[e];for(c=e-1;c>=1;c-=2){b[c]=0;b[c-1]=0}if(c===0){b[0]=0}a[e]=b}return a};numeric.getDiag=function(a){var d=Math.min(a.length,a[0].length),c,b=Array(d);for(c=d-1;c>=1;--c){b[c]=a[c][c];--c;b[c]=a[c][c]}if(c===0){b[0]=a[0][0]}return b};numeric.identity=function identity(a){return numeric.diag(numeric.rep([a],1))};numeric.pointwise2=function pointwise2(d,g,c){if(typeof c==="undefined"){c=""}var h=[];var e;var i=/\[i\]$/,a,f="";var b=false;for(e=0;e<d.length;e++){if(i.test(d[e])){a=d[e].substring(0,d[e].length-3);f=a}else{a=d[e]}if(a==="ret"){b=true}h.push(a)}h[d.length]=("var _n = "+f+".length;\nvar i"+(b?"":", ret = Array(_n)")+";\n"+c+"\nfor(i=_n-1;i!==-1;--i) {\n"+g+"\n}\nreturn ret;");return Function.apply(null,h)};numeric._biforeach=(function _biforeach(a,h,d,b,e){if(b===d.length-1){e(a,h);return}var c,g=d[b];for(c=g-1;c>=0;c--){_biforeach(typeof a==="object"?a[c]:a,typeof h==="object"?h[c]:h,d,b+1,e)}});numeric._biforeach2=(function _biforeach2(a,j,e,b,g){if(b===e.length-1){return g(a,j)}var d,h=e[b],c=Array(h);for(d=h-1;d>=0;--d){c[d]=_biforeach2(typeof a==="object"?a[d]:a,typeof j==="object"?j[d]:j,e,b+1,g)}return c});numeric._foreach=(function _foreach(a,d,b,e){if(b===d.length-1){e(a);return}var c,g=d[b];for(c=g-1;c>=0;c--){_foreach(a[c],d,b+1,e)}});numeric._foreach2=(function _foreach2(a,e,b,g){if(b===e.length-1){return g(a)}var d,h=e[b],c=Array(h);for(d=h-1;d>=0;d--){c[d]=_foreach2(a[d],e,b+1,g)}return c});numeric.ops2={add:"+",sub:"-",mul:"*",div:"/",mod:"%",and:"&&",or:"||",eq:"===",neq:"!==",lt:"<",gt:">",leq:"<=",geq:">=",band:"&",bor:"|",bxor:"^",lshift:"<<",rshift:">>",rrshift:">>>"};numeric.opseq={addeq:"+=",subeq:"-=",muleq:"*=",diveq:"/=",modeq:"%=",lshifteq:"<<=",rshifteq:">>=",rrshifteq:">>>=",bandeq:"&=",boreq:"|=",bxoreq:"^="};numeric.mathfuns=["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","isNaN","isFinite"];numeric.mathfuns2=["atan2","pow","max","min"];numeric.ops1={neg:"-",not:"!",bnot:"~",clone:""};numeric.mapreducers={any:["if(xi) return true;","var accum = false;"],all:["if(!xi) return false;","var accum = true;"],sum:["accum += xi;","var accum = 0;"],prod:["accum *= xi;","var accum = 1;"],norm2Squared:["accum += xi*xi;","var accum = 0;"],norminf:["accum = max(accum,abs(xi));","var accum = 0, max = Math.max, abs = Math.abs;"],norm1:["accum += abs(xi)","var accum = 0, abs = Math.abs;"],sup:["accum = max(accum,xi);","var accum = -Infinity, max = Math.max;"],inf:["accum = min(accum,xi);","var accum = Infinity, min = Math.min;"]};(function(){var b,e;for(b=0;b<numeric.mathfuns2.length;++b){e=numeric.mathfuns2[b];numeric.ops2[e]=e}for(b in numeric.ops2){if(numeric.ops2.hasOwnProperty(b)){e=numeric.ops2[b];var c,d,a="";if(numeric.myIndexOf.call(numeric.mathfuns2,b)!==-1){a="var "+e+" = Math."+e+";\n";c=function(g,f,h){return g+" = "+e+"("+f+","+h+")"};d=function(f,g){return f+" = "+e+"("+f+","+g+")"}}else{c=function(g,f,h){return g+" = "+f+" "+e+" "+h};if(numeric.opseq.hasOwnProperty(b+"eq")){d=function(f,g){return f+" "+e+"= "+g}}else{d=function(f,g){return f+" = "+f+" "+e+" "+g}}}numeric[b+"VV"]=numeric.pointwise2(["x[i]","y[i]"],c("ret[i]","x[i]","y[i]"),a);numeric[b+"SV"]=numeric.pointwise2(["x","y[i]"],c("ret[i]","x","y[i]"),a);numeric[b+"VS"]=numeric.pointwise2(["x[i]","y"],c("ret[i]","x[i]","y"),a);numeric[b]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric."+b+"VV, VS = numeric."+b+"VS, SV = numeric."+b+'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else '+d("x","y")+"\n}\nreturn x;\n");numeric[e]=numeric[b];numeric[b+"eqV"]=numeric.pointwise2(["ret[i]","x[i]"],d("ret[i]","x[i]"),a);numeric[b+"eqS"]=numeric.pointwise2(["ret[i]","x"],d("ret[i]","x"),a);numeric[b+"eq"]=Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric."+b+"eqV, S = numeric."+b+'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n')}}for(b=0;b<numeric.mathfuns2.length;++b){e=numeric.mathfuns2[b];delete numeric.ops2[e]}for(b=0;b<numeric.mathfuns.length;++b){e=numeric.mathfuns[b];numeric.ops1[e]=e}for(b in numeric.ops1){if(numeric.ops1.hasOwnProperty(b)){a="";e=numeric.ops1[b];if(numeric.myIndexOf.call(numeric.mathfuns,b)!==-1){if(Math.hasOwnProperty(e)){a="var "+e+" = Math."+e+";\n"}}numeric[b+"eqV"]=numeric.pointwise2(["ret[i]"],"ret[i] = "+e+"(ret[i]);",a);numeric[b+"eq"]=Function("x",'if(typeof x !== "object") return '+e+"x\nvar i;\nvar V = numeric."+b+"eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n");numeric[b+"V"]=numeric.pointwise2(["x[i]"],"ret[i] = "+e+"(x[i]);",a);numeric[b]=Function("x",'if(typeof x !== "object") return '+e+"(x)\nvar i;\nvar V = numeric."+b+"V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n")}}for(b=0;b<numeric.mathfuns.length;++b){e=numeric.mathfuns[b];delete numeric.ops1[e]}for(b in numeric.mapreducers){if(numeric.mapreducers.hasOwnProperty(b)){e=numeric.mapreducers[b];numeric[b+"V"]=numeric.mapreduce2(e[0],e[1]);numeric[b]=Function("x","s","k",e[1]+'if(typeof x !== "object") {    xi = x;\n'+e[0]+';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.'+b+"V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n"+e[0]+";\n}\nreturn accum;\n")}}}());numeric.inv=function inv(o){var v=numeric.dim(o),w=Math.abs,d=v[0],c=v[1];var b=numeric.clone(o),q,l;var p=numeric.identity(d),a,u;var h,g,e,o;for(g=0;g<c;++g){var f=-1;var r=-1;for(h=g;h!==d;++h){e=w(b[h][g]);if(e>r){f=h;r=e}}l=b[f];b[f]=b[g];b[g]=l;u=p[f];p[f]=p[g];p[g]=u;o=l[g];for(e=g;e!==c;++e){l[e]/=o}for(e=c-1;e!==-1;--e){u[e]/=o}for(h=d-1;h!==-1;--h){if(h!==g){q=b[h];a=p[h];o=q[g];for(e=g+1;e!==c;++e){q[e]-=l[e]*o}for(e=c-1;e>0;--e){a[e]-=u[e]*o;--e;a[e]-=u[e]*o}if(e===0){a[0]-=u[0]*o}}}}return p};numeric.det=function det(p){var u=numeric.dim(p);if(u.length!==2||u[0]!==u[1]){throw new Error("numeric: det() only works on square matrices")}var b=u[0],l=1,f,e,d,a=numeric.clone(p),o,q,c,r,m,h,g;for(e=0;e<b-1;e++){d=e;for(f=e+1;f<b;f++){if(Math.abs(a[f][e])>Math.abs(a[d][e])){d=f}}if(d!==e){r=a[d];a[d]=a[e];a[e]=r;l*=-1}o=a[e];for(f=e+1;f<b;f++){q=a[f];c=q[e]/o[e];for(d=e+1;d<b-1;d+=2){m=d+1;q[d]-=o[d]*c;q[m]-=o[m]*c}if(d!==b){q[d]-=o[d]*c}}if(o[e]===0){return 0}l*=o[e]}return l*a[e][e]};numeric.transpose=function transpose(k){var g,e,c=k.length,a=k[0].length,h=Array(a),d,b,f;for(e=0;e<a;e++){h[e]=Array(c)}for(g=c-1;g>=1;g-=2){b=k[g];d=k[g-1];for(e=a-1;e>=1;--e){f=h[e];f[g]=b[e];f[g-1]=d[e];--e;f=h[e];f[g]=b[e];f[g-1]=d[e]}if(e===0){f=h[0];f[g]=b[0];f[g-1]=d[0]}}if(g===0){d=k[0];for(e=a-1;e>=1;--e){h[e][0]=d[e];--e;h[e][0]=d[e]}if(e===0){h[0][0]=d[0]}}return h};numeric.negtranspose=function negtranspose(k){var g,e,c=k.length,a=k[0].length,h=Array(a),d,b,f;for(e=0;e<a;e++){h[e]=Array(c)}for(g=c-1;g>=1;g-=2){b=k[g];d=k[g-1];for(e=a-1;e>=1;--e){f=h[e];f[g]=-b[e];f[g-1]=-d[e];--e;f=h[e];f[g]=-b[e];f[g-1]=-d[e]}if(e===0){f=h[0];f[g]=-b[0];f[g-1]=-d[0]}}if(g===0){d=k[0];for(e=a-1;e>=1;--e){h[e][0]=-d[e];--e;h[e][0]=-d[e]}if(e===0){h[0][0]=-d[0]}}return h};numeric.norm2=function norm2(a){return Math.sqrt(numeric.norm2Squared(a))};numeric.getBlock=function getBlock(a,e,d){var b=numeric.dim(a);function c(f,h){var l,g=e[h],m=d[h]-g,j=Array(m);if(h===b.length-1){for(l=m;l>=0;l--){j[l]=f[l+g]}return j}for(l=m;l>=0;l--){j[l]=c(f[l+g],h+1)}return j}return c(a,0)};numeric.setBlock=function setBlock(a,f,e,d){var b=numeric.dim(a);function c(g,o,j){var l,h=f[j],m=e[j]-h;if(j===b.length-1){for(l=m;l>=0;l--){g[l+h]=o[l]}}for(l=m;l>=0;l--){c(g[l+h],o[l],j+1)}}c(a,d,0);return a};numeric.getRange=function getRange(b,l,k){var e=l.length,d=k.length;var g,f;var a=Array(e),h,c;for(g=e-1;g!==-1;--g){a[g]=Array(d);h=a[g];c=b[l[g]];for(f=d-1;f!==-1;--f){h[f]=c[k[f]]}}return a};numeric.tensor=function tensor(h,g){if(typeof h==="number"||typeof g==="number"){return numeric.mul(h,g)}var o=numeric.dim(h),k=numeric.dim(g);if(o.length!==1||k.length!==1){throw new Error("numeric: tensor product is only defined for vectors")}var c=o[0],b=k[0],a=Array(c),l,e,d,f;for(e=c-1;e>=0;e--){l=Array(b);f=h[e];for(d=b-1;d>=3;--d){l[d]=f*g[d];--d;l[d]=f*g[d];--d;l[d]=f*g[d];--d;l[d]=f*g[d]}while(d>=0){l[d]=f*g[d];--d}a[e]=l}return a};numeric.T=function T(a,b){this.x=a;this.y=b};numeric.t=function t(a,b){return new numeric.T(a,b)};numeric.Tbinop=function Tbinop(c,e,d,g,a){var f=numeric.indexOf;if(typeof a!=="string"){var b;a="";for(b in numeric){if(numeric.hasOwnProperty(b)&&(c.indexOf(b)>=0||e.indexOf(b)>=0||d.indexOf(b)>=0||g.indexOf(b)>=0)&&b.length>1){a+="var "+b+" = numeric."+b+";\n"}}}return Function(["y"],"var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n"+a+"\nif(x.y) {  if(y.y) {    return new numeric.T("+g+");\n  }\n  return new numeric.T("+d+");\n}\nif(y.y) {\n  return new numeric.T("+e+");\n}\nreturn new numeric.T("+c+");\n")};numeric.T.prototype.add=numeric.Tbinop("add(x.x,y.x)","add(x.x,y.x),y.y","add(x.x,y.x),x.y","add(x.x,y.x),add(x.y,y.y)");numeric.T.prototype.sub=numeric.Tbinop("sub(x.x,y.x)","sub(x.x,y.x),neg(y.y)","sub(x.x,y.x),x.y","sub(x.x,y.x),sub(x.y,y.y)");numeric.T.prototype.mul=numeric.Tbinop("mul(x.x,y.x)","mul(x.x,y.x),mul(x.x,y.y)","mul(x.x,y.x),mul(x.y,y.x)","sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))");numeric.T.prototype.reciprocal=function reciprocal(){var a=numeric.mul,c=numeric.div;if(this.y){var b=numeric.add(a(this.x,this.x),a(this.y,this.y));return new numeric.T(c(this.x,b),c(numeric.neg(this.y),b))}return new T(c(1,this.x))};numeric.T.prototype.div=function div(b){if(!(b instanceof numeric.T)){b=new numeric.T(b)}if(b.y){return this.mul(b.reciprocal())}var a=numeric.div;if(this.y){return new numeric.T(a(this.x,b.x),a(this.y,b.x))}return new numeric.T(a(this.x,b.x))};numeric.T.prototype.dot=numeric.Tbinop("dot(x.x,y.x)","dot(x.x,y.x),dot(x.x,y.y)","dot(x.x,y.x),dot(x.y,y.x)","sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))");numeric.T.prototype.transpose=function transpose(){var b=numeric.transpose,a=this.x,c=this.y;if(c){return new numeric.T(b(a),b(c))}return new numeric.T(b(a))};numeric.T.prototype.transjugate=function transjugate(){var b=numeric.transpose,a=this.x,c=this.y;if(c){return new numeric.T(b(a),numeric.negtranspose(c))}return new numeric.T(b(a))};numeric.Tunop=function Tunop(b,d,a){if(typeof a!=="string"){a=""}return Function("var x = this;\n"+a+"\nif(x.y) {  "+d+";\n}\n"+b+";\n")};numeric.T.prototype.exp=numeric.Tunop("return new numeric.T(ex)","return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))","var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;");numeric.T.prototype.conj=numeric.Tunop("return new numeric.T(x.x);","return new numeric.T(x.x,numeric.neg(x.y));");numeric.T.prototype.neg=numeric.Tunop("return new numeric.T(neg(x.x));","return new numeric.T(neg(x.x),neg(x.y));","var neg = numeric.neg;");numeric.T.prototype.sin=numeric.Tunop("return new numeric.T(numeric.sin(x.x))","return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));");numeric.T.prototype.cos=numeric.Tunop("return new numeric.T(numeric.cos(x.x))","return x.exp().add(x.neg().exp()).div(2);");numeric.T.prototype.abs=numeric.Tunop("return new numeric.T(numeric.abs(x.x));","return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));","var mul = numeric.mul;");numeric.T.prototype.log=numeric.Tunop("return new numeric.T(numeric.log(x.x));","var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);");numeric.T.prototype.norm2=numeric.Tunop("return numeric.norm2(x.x);","var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));");numeric.T.prototype.get=function get(d){var a=this.x,f=this.y,b=0,c,e=d.length;if(f){while(b<e){c=d[b];a=a[c];f=f[c];b++}return new numeric.T(a,f)}while(b<e){c=d[b];a=a[c];b++}return new numeric.T(a)};numeric.T.prototype.set=function set(c,j){var g=this.x,e=this.y,b=0,h,a=c.length,f=j.x,d=j.y;if(a===0){if(d){this.y=d}else{if(e){this.y=undefined}}this.x=g;return this}if(d){if(e){}else{e=numeric.rep(numeric.dim(g),0);this.y=e}while(b<a-1){h=c[b];g=g[h];e=e[h];b++}h=c[b];g[h]=f;e[h]=d;return this}if(e){while(b<a-1){h=c[b];g=g[h];e=e[h];b++}h=c[b];g[h]=f;if(f instanceof Array){e[h]=numeric.rep(numeric.dim(f),0)}else{e[h]=0}return this}while(b<a-1){h=c[b];g=g[h];b++}h=c[b];g[h]=f;return this};numeric.T.prototype.getRows=function getRows(e,c){var h=c-e+1,b;var f=Array(h),d,a=this.x,g=this.y;for(b=e;b<=c;b++){f[b-e]=a[b]}if(g){d=Array(h);for(b=e;b<=c;b++){d[b-e]=g[b]}return new numeric.T(f,d)}return new numeric.T(f)};numeric.T.prototype.setRows=function setRows(f,d,b){var c;var g=this.x,e=this.y,a=b.x,h=b.y;for(c=f;c<=d;c++){g[c]=a[c-f]}if(h){if(!e){e=numeric.rep(numeric.dim(g),0);this.y=e}for(c=f;c<=d;c++){e[c]=h[c-f]}}else{if(e){for(c=f;c<=d;c++){e[c]=numeric.rep([a[c-f].length],0)}}}return this};numeric.T.prototype.getRow=function getRow(b){var a=this.x,c=this.y;if(c){return new numeric.T(a[b],c[b])}return new numeric.T(a[b])};numeric.T.prototype.setRow=function setRow(c,b){var e=this.x,d=this.y,a=b.x,f=b.y;e[c]=a;if(f){if(!d){d=numeric.rep(numeric.dim(e),0);this.y=d}d[c]=f}else{if(d){d=numeric.rep([a.length],0)}}return this};numeric.T.prototype.getBlock=function getBlock(f,e){var c=this.x,d=this.y,a=numeric.getBlock;if(d){return new numeric.T(a(c,f,e),a(d,f,e))}return new numeric.T(a(c,f,e))};numeric.T.prototype.setBlock=function setBlock(i,h,d){if(!(d instanceof numeric.T)){d=new numeric.T(d)}var c=this.x,g=this.y,a=numeric.setBlock,f=d.x,e=d.y;if(e){if(!g){this.y=numeric.rep(numeric.dim(this),0);g=this.y}a(c,i,h,f);a(g,i,h,e);return this}a(c,i,h,f);if(g){a(g,i,h,numeric.rep(numeric.dim(f),0))}};numeric.T.rep=function rep(d,b){var c=numeric.T;if(!(b instanceof c)){b=new c(b)}var a=b.x,f=b.y,e=numeric.rep;if(f){return new c(e(d,a),e(d,f))}return new c(e(d,a))};numeric.T.diag=function diag(c){if(!(c instanceof numeric.T)){c=new numeric.T(c)}var a=c.x,e=c.y,b=numeric.diag;if(e){return new numeric.T(b(a),b(e))}return new numeric.T(b(a))};numeric.T.eig=function eig(){if(this.y){throw new Error("eig: not implemented for complex matrices.")}return numeric.eig(this.x)};numeric.T.identity=function identity(a){return new numeric.T(numeric.identity(a))};numeric.T.prototype.getDiag=function getDiag(){var c=numeric;var a=this.x,b=this.y;if(b){return new c.T(c.getDiag(a),c.getDiag(b))}return new c.T(c.getDiag(a))};numeric.house=function house(a){var b=numeric.clone(a);var c=a[0]>=0?1:-1;var d=c*numeric.norm2(a);b[0]+=d;var e=numeric.norm2(b);if(e===0){throw new Error("eig: internal error")}return numeric.div(b,e)};numeric.toUpperHessenberg=function toUpperHessenberg(o){var u=numeric.dim(o);if(u.length!==2||u[0]!==u[1]){throw new Error("numeric: toUpperHessenberg() only works on square matrices")}var f=u[0],l,h,g,p,r,d=numeric.clone(o),c,a,q,b,n=numeric.identity(f),e;for(h=0;h<f-2;h++){p=Array(f-h-1);for(l=h+1;l<f;l++){p[l-h-1]=d[l][h]}if(numeric.norm2(p)>0){r=numeric.house(p);c=numeric.getBlock(d,[h+1,h],[f-1,f-1]);a=numeric.tensor(r,numeric.dot(r,c));for(l=h+1;l<f;l++){q=d[l];b=a[l-h-1];for(g=h;g<f;g++){q[g]-=2*b[g-h]}}c=numeric.getBlock(d,[0,h+1],[f-1,f-1]);a=numeric.tensor(numeric.dot(c,r),r);for(l=0;l<f;l++){q=d[l];b=a[l];for(g=h+1;g<f;g++){q[g]-=2*b[g-h-1]}}c=Array(f-h-1);for(l=h+1;l<f;l++){c[l-h-1]=n[l]}a=numeric.tensor(r,numeric.dot(r,c));for(l=h+1;l<f;l++){e=n[l];b=a[l-h-1];for(g=0;g<f;g++){e[g]-=2*b[g]}}}}return{H:d,Q:n}};numeric.epsilon=2.220446049250313e-16;numeric.QRFrancis=function(z,h){if(typeof h==="undefined"){h=10000}z=numeric.clone(z);var D=numeric.clone(z);var E=numeric.dim(z),K=E[0],y,A,U,S,R,P,n,e,l,q=numeric.identity(K),u,r,I,G,F,O,M,L,N;if(K<3){return{Q:q,B:[[0,K-1]]}}var V=numeric.epsilon;for(N=0;N<h;N++){for(M=0;M<K-1;M++){if(Math.abs(z[M+1][M])<V*(Math.abs(z[M][M])+Math.abs(z[M+1][M+1]))){var p=numeric.QRFrancis(numeric.getBlock(z,[0,0],[M,M]),h);var o=numeric.QRFrancis(numeric.getBlock(z,[M+1,M+1],[K-1,K-1]),h);I=Array(M+1);for(O=0;O<=M;O++){I[O]=q[O]}G=numeric.dot(p.Q,I);for(O=0;O<=M;O++){q[O]=G[O]}I=Array(K-M-1);for(O=M+1;O<K;O++){I[O-M-1]=q[O]}G=numeric.dot(o.Q,I);for(O=M+1;O<K;O++){q[O]=G[O-M-1]}return{Q:q,B:p.B.concat(numeric.add(o.B,M+1))}}}U=z[K-2][K-2];S=z[K-2][K-1];R=z[K-1][K-2];P=z[K-1][K-1];e=U+P;n=(U*P-S*R);l=numeric.getBlock(z,[0,0],[2,2]);if(e*e>=4*n){var g,f;g=0.5*(e+Math.sqrt(e*e-4*n));f=0.5*(e-Math.sqrt(e*e-4*n));l=numeric.add(numeric.sub(numeric.dot(l,l),numeric.mul(l,g+f)),numeric.diag(numeric.rep([3],g*f)))}else{l=numeric.add(numeric.sub(numeric.dot(l,l),numeric.mul(l,e)),numeric.diag(numeric.rep([3],n)))}y=[l[0][0],l[1][0],l[2][0]];A=numeric.house(y);I=[z[0],z[1],z[2]];G=numeric.tensor(A,numeric.dot(A,I));for(O=0;O<3;O++){r=z[O];F=G[O];for(L=0;L<K;L++){r[L]-=2*F[L]}}I=numeric.getBlock(z,[0,0],[K-1,2]);G=numeric.tensor(numeric.dot(I,A),A);for(O=0;O<K;O++){r=z[O];F=G[O];for(L=0;L<3;L++){r[L]-=2*F[L]}}I=[q[0],q[1],q[2]];G=numeric.tensor(A,numeric.dot(A,I));for(O=0;O<3;O++){u=q[O];F=G[O];for(L=0;L<K;L++){u[L]-=2*F[L]}}var w;for(M=0;M<K-2;M++){for(L=M;L<=M+1;L++){if(Math.abs(z[L+1][L])<V*(Math.abs(z[L][L])+Math.abs(z[L+1][L+1]))){var p=numeric.QRFrancis(numeric.getBlock(z,[0,0],[L,L]),h);var o=numeric.QRFrancis(numeric.getBlock(z,[L+1,L+1],[K-1,K-1]),h);I=Array(L+1);for(O=0;O<=L;O++){I[O]=q[O]}G=numeric.dot(p.Q,I);for(O=0;O<=L;O++){q[O]=G[O]}I=Array(K-L-1);for(O=L+1;O<K;O++){I[O-L-1]=q[O]}G=numeric.dot(o.Q,I);for(O=L+1;O<K;O++){q[O]=G[O-L-1]}return{Q:q,B:p.B.concat(numeric.add(o.B,L+1))}}}w=Math.min(K-1,M+3);y=Array(w-M);for(O=M+1;O<=w;O++){y[O-M-1]=z[O][M]}A=numeric.house(y);I=numeric.getBlock(z,[M+1,M],[w,K-1]);G=numeric.tensor(A,numeric.dot(A,I));for(O=M+1;O<=w;O++){r=z[O];F=G[O-M-1];for(L=M;L<K;L++){r[L]-=2*F[L-M]}}I=numeric.getBlock(z,[0,M+1],[K-1,w]);G=numeric.tensor(numeric.dot(I,A),A);for(O=0;O<K;O++){r=z[O];F=G[O];for(L=M+1;L<=w;L++){r[L]-=2*F[L-M-1]}}I=Array(w-M);for(O=M+1;O<=w;O++){I[O-M-1]=q[O]}G=numeric.tensor(A,numeric.dot(A,I));for(O=M+1;O<=w;O++){u=q[O];F=G[O-M-1];for(L=0;L<K;L++){u[L]-=2*F[L]}}}}throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")};numeric.eig=function eig(L,l){var f=numeric.toUpperHessenberg(L);var o=numeric.QRFrancis(f.H,l);var r=numeric.T;var O=L.length,W,S,V=false,J=o.B,D=numeric.dot(o.Q,numeric.dot(f.H,numeric.transpose(o.Q)));var u=new r(numeric.dot(o.Q,f.Q)),G;var P=J.length,U;var aa,Z,Y,X,h,g,e,C,z,K,I,w,v;var ab=Math.sqrt;for(S=0;S<P;S++){W=J[S][0];if(W===J[S][1]){}else{U=W+1;aa=D[W][W];Z=D[W][U];Y=D[U][W];X=D[U][U];if(Z===0&&Y===0){continue}h=-aa-X;g=aa*X-Z*Y;e=h*h-4*g;if(e>=0){if(h<0){C=-0.5*(h-ab(e))}else{C=-0.5*(h+ab(e))}w=(aa-C)*(aa-C)+Z*Z;v=Y*Y+(X-C)*(X-C);if(w>v){w=ab(w);K=(aa-C)/w;I=Z/w}else{v=ab(v);K=Y/v;I=(X-C)/v}G=new r([[I,-K],[K,I]]);u.setRows(W,U,G.dot(u.getRows(W,U)))}else{C=-0.5*h;z=0.5*ab(-e);w=(aa-C)*(aa-C)+Z*Z;v=Y*Y+(X-C)*(X-C);if(w>v){w=ab(w+z*z);K=(aa-C)/w;I=Z/w;C=0;z/=w}else{v=ab(v+z*z);K=Y/v;I=(X-C)/v;C=z/v;z=0}G=new r([[I,-K],[K,I]],[[C,z],[z,-C]]);u.setRows(W,U,G.dot(u.getRows(W,U)))}}}var s=u.dot(L).dot(u.transjugate()),O=L.length,F=numeric.T.identity(O);for(U=0;U<O;U++){if(U>0){for(S=U-1;S>=0;S--){var M=s.get([S,S]),N=s.get([U,U]);if(numeric.neq(M.x,N.x)||numeric.neq(M.y,N.y)){C=s.getRow(S).getBlock([S],[U-1]);z=F.getRow(U).getBlock([S],[U-1]);F.set([U,S],(s.get([S,U]).neg().sub(C.dot(z))).div(M.sub(N)))}else{F.setRow(U,F.getRow(S));continue}}}}for(U=0;U<O;U++){C=F.getRow(U);F.setRow(U,C.div(C.norm2()))}F=F.transpose();F=u.transjugate().dot(F);return{lambda:s.getDiag(),E:F}};/*!!
 *  Canvas 2 Svg v1.0.19
 *  A low level canvas to SVG converter. Uses a mock canvas context to build an SVG document.
 *
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Author:
 *  Kerry Liu
 *
 *  Copyright (c) 2014 Gliffy Inc.
 */